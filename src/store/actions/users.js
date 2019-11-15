import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from 'store/types/users';

export const getUsers = () => ({
    type: GET_USERS
});

export const getUsersSuccess = payload => ({
    type: GET_USERS_SUCCESS,
    payload
});

export const getUsersFailure = error => ({
    type: GET_USERS_FAILURE,
    payload: error,
    error: true
});

export const getUser = id => ({
    type: GET_USER,
    payload: id
});

export const getUserSuccess = payload => ({
    type: GET_USER_SUCCESS,
    payload
});

export const getUserFailure = error => ({
    type: GET_USER_FAILURE,
    payload: error,
    error: true
});
