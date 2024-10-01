import { all, call } from "redux-saga/effects";
import { scssSagas } from "./scss/scss.sagas";

export default function* rootSaga() {
  yield all([call(scssSagas)]);
}
