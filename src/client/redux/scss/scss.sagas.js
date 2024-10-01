import * as api from "../../api";

import { takeLatest, call, put, all } from "redux-saga/effects";
import { sendCssSuccess, sendCssFailure } from "./scss.actions";
import PostsTypes from "./scss.types";

export function* sendCssAsync({ payload }) {
  try {
    let {
      data: { data },
    } = yield api.convertToSCSS(payload);

    let code = payload.split("\n");

    if (data.status === "FAILURE") {
      const line = data.errorMessage[0].line;
      const column = data.errorMessage[0].column;

      const offset = column;

      let errorMsg = " ".repeat(offset) + "⤒\n";
      errorMsg += " ".repeat(offset) + "|\n";
      errorMsg +=
        " ".repeat(offset) + "└── " + data.errorMessage[1].split(",")[0] + "\n";
      errorMsg +=
        " ".repeat(offset) + "   " + data.errorMessage[1].split(",")[1] + "\n";
      errorMsg +=
        " ".repeat(offset) + "   " + data.errorMessage[1].split(",")[2] + "\n";

      code.splice(line, 0, errorMsg);
      data.code = "/*\n" + code.map((line) => line + "\n").join("") + "*/";
      yield put(sendCssSuccess(data));
      return;
    }

    yield put(sendCssSuccess(data));
  } catch (error) {
    yield put(sendCssFailure(error));
  }
}

export function* onSendCssStart() {
  yield takeLatest(PostsTypes.SEND_CSS_START, sendCssAsync);
}

export function* scssSagas() {
  yield all([call(onSendCssStart)]);
}
