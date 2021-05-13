// Constants
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from 'src/constants/actionTypes';

// Api
import { getUsers } from 'src/api';

// Fetch posts action creator
export const fetchUsers = (page = 1) => async (dispatch) => {
  try {
    const users = await getUsers({ page });

    return dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (e) {
    console.log(e);
    return dispatch({ type: FETCH_USERS_FAILURE });
  }
};
