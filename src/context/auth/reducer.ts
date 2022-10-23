import {AuthContextProps, User} from './index';

export interface AuthState
  extends Omit<
    AuthContextProps,
    'singUp' | 'singIn' | 'logout' | 'removeError'
  > {}

type AuthAction =
  | {
      type: 'singUp';
      payload: {token: string; user: User};
    }
  | {
      type: 'addError';
      payload: string;
    }
  | {
      type: 'removeError';
    }
  | {
      type: 'notAuthentication';
    }
  | {
      type: 'logout';
    };

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        toke: null,
        errorMessage: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };
    case 'singUp':
      return {
        ...state,
        status: 'authenticated',
        toke: action.payload.token,
        user: action.payload.user,
        errorMessage: '',
      };

    case 'logout':
    case 'notAuthentication':
      return {
        ...state,
        status: 'not-authenticated',
        toke: null,
        user: null,
      };

    default:
      return state;
  }
};
