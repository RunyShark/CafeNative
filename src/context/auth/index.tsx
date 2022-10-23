import React, {createContext, useReducer} from 'react';
import {AuthReducer, AuthState} from './reducer';
export interface ProviderProps {
  children: ChildrenType;
}

export type ChildrenType = JSX.Element | JSX.Element[];

export type AuthContextProps = {
  errorMessage: string;
  toke: string | null;
  user: User | null;
  status: userStatus;
  singUp: () => void;
  singIn: () => void;
  logout: () => void;
  removeError: () => void;
};

export type userStatus = 'checking' | 'authenticated' | 'not-authenticated';

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

  const singUp = () => {};
  const singIn = () => {};
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
