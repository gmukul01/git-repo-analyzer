import { CLEAR_SEARCH_RESULT, FETCH_REPO_DETAILS, FETCH_REPO_DETAILS_SUCCESS, FETCH_REPO_DETAILS_FAILURE, FETCH_SEARCH_HISTORY, FETCH_SEARCH_HISTORY_SUCCESS, FETCH_SEARCH_HISTORY_FAILURE, SET_SEARCH_TABLE_LOADING_STATE, ADD_TO_SEARCH_HISTORY_FAILURE } from "constants/actionTypes";
import createReducer from "reducers/helper";

export const initialState = {
  isLoading: false,
  result: {},
  history: [],
  errorMessage: undefined
};

const addSearchResult = (state, { data }) => ({
  ...state,
  result: data,
  isLoading: false,
  errorMessage: undefined
});

const addSearchHistory = (state, { data }) => ({
  ...state,
  history: data,
  isLoading: false,
  errorMessage: undefined
});

const addErrorMessage = (state, { message }) => ({
  ...state,
  isLoading: false,
  errorMessage: message
});

const setLoading = (state, isLoading) => ({
  ...state,
  isLoading
});

const clearSearchResult = state => ({
  ...state,
  isLoading: false,
  result: {},
  errorMessage: undefined
});

const user = createReducer(initialState, {
  [CLEAR_SEARCH_RESULT]: clearSearchResult,
  [SET_SEARCH_TABLE_LOADING_STATE]: (state, { isLoading }) => setLoading(state, isLoading),
  [FETCH_REPO_DETAILS]: state => setLoading(state, true),
  [FETCH_REPO_DETAILS_SUCCESS]: addSearchResult,
  [FETCH_REPO_DETAILS_FAILURE]: addErrorMessage,
  [FETCH_SEARCH_HISTORY]: state => setLoading(state, true),
  [FETCH_SEARCH_HISTORY_SUCCESS]: addSearchHistory,
  [FETCH_SEARCH_HISTORY_FAILURE]: addErrorMessage,
  [ADD_TO_SEARCH_HISTORY_FAILURE]: addErrorMessage
});

export default user;
