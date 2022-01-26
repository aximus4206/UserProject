import * as type from './usersTypes';
import { IUsersState, IAction } from '../../interfaces/usersInterfaces';

const initialState: IUsersState = {
  users: [],
};

const usersReducer = <T,>(state = initialState, action: IAction<T>) => {
  switch (action.type) {
    case type.FETCH_USERS_REQUEST:
      return { ...state };

    case type.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case type.FETCH_USERS_ERROR:
      return { ...state, users: action.payload };

    case type.FETCH_MORE_USERS_SUCCESS:
      return { ...state, users: [...state.users, ...action.payload] };

    default:
      return state;
  }
};

export default usersReducer;