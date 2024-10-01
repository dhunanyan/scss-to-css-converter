import React from "react";
import { FaTimesCircle as CloseButton } from "react-icons/fa";
import {
  ErrorPopupCloseButton,
  ErrorPopupContainer,
  ErrorPopupContent,
  ErrorPopupHeader,
  ErrorPopupMessage,
  ErrorPopupSubtitle,
  ErrorPopupTitle,
  ErrorPopupWrapper,
} from "./ErrorPopup.styles";

export const ErrorPopup = ({ name, errorMessage, closePopup }) => (
  <ErrorPopupWrapper onClick={closePopup}>
    <ErrorPopupContainer>
      <ErrorPopupHeader>
        <ErrorPopupTitle>Nastąpił błąd</ErrorPopupTitle>
        <ErrorPopupCloseButton onClick={closePopup}>
          <CloseButton />
        </ErrorPopupCloseButton>
      </ErrorPopupHeader>
      <ErrorPopupContent>
        <ErrorPopupSubtitle>{name}</ErrorPopupSubtitle>
        <ErrorPopupMessage>{errorMessage}</ErrorPopupMessage>
      </ErrorPopupContent>
    </ErrorPopupContainer>
  </ErrorPopupWrapper>
);
