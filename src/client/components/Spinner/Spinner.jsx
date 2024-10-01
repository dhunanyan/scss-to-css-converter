import React from "react";
import {
  SpinnerContainer,
  SpinnerInner,
  SpinnerWrapper,
} from "./Spinner.styles";

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerContainer>
        <SpinnerInner />
      </SpinnerContainer>
    </SpinnerWrapper>
  );
};
