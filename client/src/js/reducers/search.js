import { FETCH_REPO_DETAILS, FETCH_REPO_DETAILS_SUCCESS, FETCH_REPO_DETAILS_FAILURE } from "constants/actionTypes";
import createReducer from "reducers/helper";

const initialState = {
  isLoading: false,
  result: {},
  errorMessage: undefined
};
const addRepoDetails = (state, { data }) => ({
  ...state,
  result: { ...state.result, ...data },
  isLoading: false,
  errorMessage: undefined
});

const addErrorMessage = (state, { message }) => ({
  ...state,
  isLoading: false,
  errorMessage: message
});

const setLoading = state => ({
  ...state,
  isLoading: true
});

const user = createReducer(initialState, {
  [FETCH_REPO_DETAILS]: setLoading,
  [FETCH_REPO_DETAILS_SUCCESS]: addRepoDetails,
  [FETCH_REPO_DETAILS_FAILURE]: addErrorMessage
});

export default user;
