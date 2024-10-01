import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCssStart } from "./redux/scss/scss.actions";
import {
  AppButton,
  AppContainer,
  AppContent,
  AppDescr,
  AppForm,
  AppFormContainer,
  AppTitle,
  AppWrapper,
} from "./App.styles";
import { CssTextarea } from "./components/CssTextarea/CssTextarea";
import {
  selectConverterErrorMessage,
  selectScssCode,
  selectScssErrorMessage,
  selectScssIsLoading,
} from "./redux/scss/scss.selectors";
import { ScssTextarea } from "./components/ScssTextarea/ScssTextarea";
import { useRef } from "react";
import { SiSass as ScssIcon } from "react-icons/si";
import { FaCss3Alt as CssIcon } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight as ArrowIcon } from "react-icons/md";
import { ErrorPopup } from "./components/ErrorPopup/ErrorPopup";
import { Spinner } from "./components/Spinner/Spinner";

export const App = () => {
  const [showErrorPopup, setShowErrorPopup] = useState(true);
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const cssCode = useSelector(selectScssCode);
  const converterErrorMessage = useSelector(selectConverterErrorMessage);
  const errorMessage = useSelector(selectScssErrorMessage);
  const isLoading = useSelector(selectScssIsLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrorPopup(true);
    dispatch(sendCssStart(`${editorRef.current.getValue()}`));
  };

  return (
    <AppWrapper>
      <AppContainer>
        <AppContent>
          <AppTitle>
            <span>
              <ScssIcon />
            </span>
            <span>
              <ArrowIcon />
            </span>
            <span>
              <CssIcon />
            </span>
          </AppTitle>
          <AppDescr>
            Welcome to the SCSS to CSS Converter website! This platform offers a
            simple and efficient solution for converting SCSS (Sassy CSS) code
            into traditional CSS. We aim to provide you with a seamless
            experience and essential features for converting your SCSS code
            effortlessly.
          </AppDescr>
        </AppContent>

        <AppForm onSubmit={handleSubmit}>
          <AppFormContainer>
            {errorMessage && showErrorPopup && (
              <ErrorPopup
                errorMessage={errorMessage.message}
                name={errorMessage.name}
                closePopup={() => {
                  setShowErrorPopup(false);
                }}
              />
            )}
            {isLoading && <Spinner />}
            <ScssTextarea editorRef={editorRef} />
            <CssTextarea
              cssCode={
                converterErrorMessage === null ? cssCode : converterErrorMessage
              }
            />
          </AppFormContainer>
          <AppButton type="submit">Submit</AppButton>
        </AppForm>
      </AppContainer>
    </AppWrapper>
  );
};
