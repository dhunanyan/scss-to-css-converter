import PostsTypes from "./scss.types";

const INITIAL_STATE = {
  code: null,
  converterErrorMessage: null,
  isLoading: false,
  errorMessage: undefined,
};

const scssReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.SEND_CSS_START:
      return {
        ...state,
        code: null,
        isLoading: true,
        errorMessage: undefined,
      };
    case PostsTypes.SEND_CSS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        code: action.payload.code,
        errorMessage: undefined,
      };
    case PostsTypes.SEND_CSS_FAILURE:
      return {
        ...state,
        code: null,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default scssReducer;
