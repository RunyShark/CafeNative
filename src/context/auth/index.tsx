/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthReducer, AuthState} from './reducer';
import {api} from '../../';

export interface AuthPropsHttp {
  nombre: string;
  correo: string;
  password: string;
  rol?: Rol;
}

type LoginProps = Omit<AuthPropsHttp, 'nombre' | 'rol'>;

type Rol = 'ADMIN_ROLE' | 'USER_ROLE' | 'VENTAS_ROLE';
export interface ProviderProps {
  children: ChildrenType;
}

export type ChildrenType = JSX.Element | JSX.Element[];

export type AuthContextProps = {
  errorMessage: string;
  toke: string | null;
  user: User | null;
  status: userStatus;
  singIn: (value: LoginProps) => Promise<void>;
  singUp: (value: AuthPropsHttp) => Promise<void>;
  logout: () => void;
  removeError: () => void;
};

export type userStatus = 'checking' | 'authenticated' | 'not-authenticated';
export interface ResultLogin {
  usuario: User;
  token: string;
}
export interface User {
  uid: string;
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  img?: string;
}

const AuthInitialState: AuthState = {
  status: 'checking',
  user: null,
  toke: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);
  const {setItem, getItem, removeItem} = AsyncStorage;

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const tokenStorage = await getItem('token');
    if (!tokenStorage) {
      return dispatch({type: 'notAuthentication'});
    }
    const {
      status,
      data: {token, usuario},
    } = await api.get<ResultLogin>('/auth/');
    if (status !== 200) {
      return dispatch({type: 'notAuthentication'});
    }

    await setItem('token', tokenStorage);

    dispatch({
      type: 'singUp',
      payload: {
        token,
        user: usuario,
      },
    });
  };

  const singIn = async (info: LoginProps) => {
    try {
      const {
        data: {token, usuario},
      } = await api.post<ResultLogin>('/auth/login', info);

      dispatch({
        type: 'singUp',
        payload: {
          token,
          user: usuario,
        },
      });
      await setItem('token', token);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Bad information',
      });
    }
  };
  const singUp = async (register: AuthPropsHttp) => {
    try {
      const {
        data: {token, usuario},
      } = await api.post<ResultLogin>('/usuarios', {
        ...register,
        rol: 'USER_ROLE',
      });
      console.log('register', {token, usuario});
      await setItem('token', token);

      dispatch({
        type: 'singUp',
        payload: {
          token,
          user: usuario,
        },
      });
    } catch (error: any) {
      if (error.response.data.msg) {
        dispatch({
          type: 'addError',
          payload: error.response.data.msg || 'Bad information',
        });
      }
    }
  };

  const logout = async () => {
    await removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => dispatch({type: 'removeError'});

  return (
    <AuthContext.Provider
      value={{
        ...state,
        singUp,
        singIn,
        logout,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
