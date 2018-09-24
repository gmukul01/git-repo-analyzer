import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_USER_DETAILS } from "constants/actionTypes";
import { fetchUserDetailsSuccess } from "actions/user";
import fetch from "util/fetch";
import * as URL from "constants/urls";

export function* fetchUserDetails() {
  const { response, error } = yield call(fetch, {
    url: URL.USER_DETAILS,
    method: "get"
  });
  if (response) {
    const user = response.data.user;
    yield put(fetchUserDetailsSuccess(user));
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER_DETAILS, fetchUserDetails);
}
