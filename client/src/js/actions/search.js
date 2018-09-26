import {
  ADD_TO_SEARCH_HISTORY,
  CLEAR_SEARCH_RESULT,
  FETCH_REPO_DETAILS,
  FETCH_REPO_DETAILS_SUCCESS,
  FETCH_REPO_DETAILS_FAILURE,
  SET_SEARCH_TABLE_LOADING_STATE,
  FETCH_SEARCH_HISTORY,
  FETCH_SEARCH_HISTORY_SUCCESS,
  FETCH_SEARCH_HISTORY_FAILURE,
  ADD_TO_SEARCH_HISTORY_FAILURE
} from "constants/actionTypes";
import actionCreator from "actions/helper";

export const fetchRepoDetails = actionCreator(FETCH_REPO_DETAILS, "data");
export const fetchRepoDetailsSuccess = actionCreator(FETCH_REPO_DETAILS_SUCCESS, "data");
export const fetchRepoDetailsFailure = actionCreator(FETCH_REPO_DETAILS_FAILURE, "message");

export const clearSearchResult = actionCreator(CLEAR_SEARCH_RESULT);
export const addToSearchHistory = actionCreator(ADD_TO_SEARCH_HISTORY, "repoName", "htmlUrl");
export const addToSearchHistoryFailure = actionCreator(ADD_TO_SEARCH_HISTORY_FAILURE, "message");
export const setSearchTableLoadingState = actionCreator(SET_SEARCH_TABLE_LOADING_STATE, "isLoading");

export const fetchSearchHistory = actionCreator(FETCH_SEARCH_HISTORY);
export const fetchSearchHistorySuccess = actionCreator(FETCH_SEARCH_HISTORY_SUCCESS, "data");
export const fetchSearchHistoryFailure = actionCreator(FETCH_SEARCH_HISTORY_FAILURE, "message");
