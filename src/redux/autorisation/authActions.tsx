import * as type from './authTypes';
interface IAction<T> {
  type: string;
  payload?: T;
}

export const loginRequest = <T,>(): IAction<T> => ({
  type: type.LOGIN_REQUEST,
});

export const loginSuccess = <T,>(): IAction<T> => ({
  type: type.LOGIN_SUCCESS,
});

export const logoutRequest = <T,>(): IAction<T> => ({
  type: type.LOGOUT_REQUEST,
});

export const logoutSuccess = <T,>(): IAction<T> => ({
  type: type.LOGOUT_SUCCESS,
});
