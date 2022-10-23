import React, {createContext} from 'react';

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

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: ProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
