import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'utils/api';
import { GET_USERS, GET_USER } from 'store/types/users';
import {
    getUsersSuccess,
    getUsersFailure,
    getUserSuccess,
    getUserFailure
} from 'store/actions/users';

function* getUsersSaga(action) {
    try {
        const res = yield call(api.getUsers);
        yield put(getUsersSuccess(res.data));
    } catch (e) {
        yield put(getUsersFailure(e));
    }
}

function* getUserSaga(action) {
    try {
        const res = yield call(api.getUserById, action.payload);
        yield put(getUserSuccess(res.data));
    } catch (e) {
        yield put(getUserFailure(e));
    }
}

export default function* userSaga() {
    yield takeLatest(GET_USERS, getUsersSaga);
    yield takeLatest(GET_USER, getUserSaga);
}
