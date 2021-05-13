import { HYDRATE } from 'next-redux-wrapper';
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from 'src/constants/actionTypes';

const initialState = {
  page: null,
  perPage: null,
  total: null,
  totalPages: null,
  usersList: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.users };

    case FETCH_USERS_SUCCESS:
      return { ...state, ...action.payload, error: null };

    case FETCH_USERS_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default usersReducer;
