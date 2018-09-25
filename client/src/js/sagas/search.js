import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_REPO_DETAILS } from "constants/actionTypes";
import { fetchRepoDetailsSuccess, fetchRepoDetailsFailure } from "actions/search";
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

export default function* searchSaga() {
  yield takeLatest(FETCH_REPO_DETAILS, fetchRepoDetails);
}
