import { all } from "redux-saga/effects";
import userSaga from "sagas/user";
import searchSaga from "sagas/search";

export default function* rootSaga() {
  yield all([userSaga(), searchSaga()]);
}
