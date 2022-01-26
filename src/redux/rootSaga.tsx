import { all } from 'redux-saga/effects';
import { watchAuth } from './autorisation/authSaga';
import { usersWatcher } from './users/usersSagas';

export function* rootSaga() {
  yield all([usersWatcher(), watchAuth()]);
}
