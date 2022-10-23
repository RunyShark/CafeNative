import React, {createContext, useReducer} from 'react';
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
  hombre: string;
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

  const singIn = async (info: LoginProps) => {
    try {
      const {data} = await api.post<ResultLogin>('/auth/login', info);
      console.log('result result', data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const singUp = async (register: AuthPropsHttp) => {
    try {
      const {data} = await api.post<ResultLogin>('/usuario', {
        ...register,
        rol: 'USER_ROLE',
      });
      console.log('result result', data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const logout = () => {};
  const removeError = () => {};

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
