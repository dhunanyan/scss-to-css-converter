import PostsTypes from "./scss.types";

export const sendCssStart = (body) => ({
  type: PostsTypes.SEND_CSS_START,
  payload: body,
});

export const sendCssSuccess = (code) => ({
  type: PostsTypes.SEND_CSS_SUCCESS,
  payload: code,
});

export const sendCssFailure = (errorMessage) => ({
  type: PostsTypes.SEND_CSS_FAILURE,
  payload: errorMessage,
});
