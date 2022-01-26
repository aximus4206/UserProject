import {
    IUser,
    IUserState,
  } from '../../interfaces/usersInterfaces';
  
export const getUsers = (state: IUserState): IUser[] =>
state.users.users;

  