import { createSelector } from "reselect";

const selectScss = (state) => state.SCSS;

export const selectScssCode = createSelector([selectScss], (SCSS) => SCSS.code);

export const selectScssIsLoading = createSelector(
  [selectScss],
  (SCSS) => SCSS.isLoading
);

export const selectConverterErrorMessage = createSelector(
  [selectScss],
  (SCSS) => SCSS.converterErrorMessage
);

export const selectScssErrorMessage = createSelector(
  [selectScss],
  (SCSS) => SCSS.errorMessage
);
