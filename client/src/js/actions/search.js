import { FETCH_REPO_DETAILS, FETCH_REPO_DETAILS_SUCCESS, FETCH_REPO_DETAILS_FAILURE } from "constants/actionTypes";
import actionCreator from "actions/helper";

export const fetchRepoDetails = actionCreator(FETCH_REPO_DETAILS, "data");
export const fetchRepoDetailsSuccess = actionCreator(FETCH_REPO_DETAILS_SUCCESS, "data");
export const fetchRepoDetailsFailure = actionCreator(FETCH_REPO_DETAILS_FAILURE, "message");
