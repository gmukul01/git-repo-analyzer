import { FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS } from "constants/actionTypes";
import createReducer from "reducers/helper";

const initialState = null;
const addUserDetails = (state, { user }) => ({
  ...state,
  ...user,
  isLoading: false
});

const setLoading = state => ({
  ...state,
  isLoading: true
});

const user = createReducer(initialState, {
  [FETCH_USER_DETAILS_SUCCESS]: addUserDetails,
  [FETCH_USER_DETAILS]: setLoading
});

export default user;
