import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from 'store/types/users';

const initialState = {
    user: null,
    users: null,
    loading: {
        users: false,
        user: false
    },
    error: {
        users: null,
        user: null
    }
};

const userReducer = (state = initialState, { type, payload, error }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                loading: { ...state.loading, users: true },
                error: { ...state.error, users: null }
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload,
                loading: { ...state.loading, users: false }
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: { ...state.loading, users: false },
                error: { ...state.error, users: payload }
            };
        case GET_USER:
            return {
                ...state,
                loading: { ...state.loading, user: true },
                error: { ...state.error, user: null }
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: { ...state.loading, user: false }
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: { ...state.loading, user: false },
                error: { ...state.error, user: payload }
            };
        default:
            return state;
    }
};

export default userReducer;
