import { put, takeLatest } from '@redux-saga/core/effects';
import { loginSuccess, logoutSuccess } from './authActions';
import * as type from './authTypes'


function* loginWorker() {
    const auth = localStorage.getItem('auth');
    try {
        if(!auth){
            localStorage.setItem('auth', 'auth');
        } 
        yield put(loginSuccess());
    } catch (error) {
        return error;
    }
}

function* logoutWorker(): Generator {
    try {
        yield put(logoutSuccess());
    } catch (error) {
        return error;
    }
}

export function* watchAuth(): Generator {
    yield takeLatest(type.LOGIN_REQUEST, loginWorker);
    yield takeLatest(type.LOGOUT_REQUEST, logoutWorker);
}