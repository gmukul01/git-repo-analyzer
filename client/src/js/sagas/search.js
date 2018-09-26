import { all, call, put, takeLatest } from "redux-saga/effects";

import { ADD_TO_SEARCH_HISTORY, FETCH_REPO_DETAILS, FETCH_SEARCH_HISTORY } from "constants/actionTypes";
import { addToSearchHistoryFailure, clearSearchResult, fetchRepoDetailsSuccess, fetchRepoDetailsFailure, fetchSearchHistorySuccess, fetchSearchHistoryFailure, setSearchTableLoadingState } from "actions/search";
import fetch from "util/fetch";
import * as URL from "constants/urls";

export function* fetchRepoDetails({ data }) {
  const { response, error } = yield call(fetch, {
    url: URL.SEARCH_URL,
    method: "post",
    data
  });
  if (response) {
    yield put(fetchRepoDetailsSuccess(response.data));
  } else {
    yield put(fetchRepoDetailsFailure(error));
  }
}

export function* saveToSearchHistory({ repoName, htmlUrl }) {
  yield put(setSearchTableLoadingState(true));

  const { response, error } = yield call(fetch, {
    url: URL.SAVE_SEARCH,
    method: "post",
    data: { repoName, htmlUrl }
  });
  if (response) {
    yield put(setSearchTableLoadingState(false));
    yield put(clearSearchResult());
  } else {
    yield put(addToSearchHistoryFailure(error));
  }
}

export function* fetchSearchHistory() {
  const { response, error } = yield call(fetch, {
    url: URL.SEARCH_HISTORY,
    method: "get"
  });
  if (response) {
    yield put(fetchSearchHistorySuccess(response.data));
  } else {
    yield put(fetchSearchHistoryFailure(error));
  }
}

export default function* searchSaga() {
  yield all([takeLatest(FETCH_REPO_DETAILS, fetchRepoDetails), takeLatest(FETCH_SEARCH_HISTORY, fetchSearchHistory), takeLatest(ADD_TO_SEARCH_HISTORY, saveToSearchHistory)]);
}
