import React from "react";
import Editor from "@monaco-editor/react";
import {
  CssTextareaContainer,
  CssTextareaHeader,
  CssTextareaHeaderTitle,
  CssTextareaHeaderButton,
  // CssTextareaMask,
  CssTextareaEditContainer,
} from "./CssTextarea.styles";

import { BsFillClipboard2Fill } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";

export const CssTextarea = ({ cssCode }) => {
  const [copy, setCopy] = useState(false);
  const editorRef = useRef(null);
  const file = {
    name: "output.css",
    language: "css",
    value: cssCode,
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <CssTextareaContainer>
      <CssTextareaHeader>
        <CssTextareaHeaderTitle>CSS code</CssTextareaHeaderTitle>
        {copy ? (
          <CssTextareaHeaderButton type="button">
            <span>Copied</span>
            <span>
              <IoMdDoneAll />
            </span>
          </CssTextareaHeaderButton>
        ) : (
          <CssTextareaHeaderButton
            onClick={() => {
              navigator.clipboard.writeText(cssCode);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <span>Copy</span>
            <span>
              <BsFillClipboard2Fill />
            </span>
          </CssTextareaHeaderButton>
        )}
      </CssTextareaHeader>
      <CssTextareaEditContainer>
        {/* <CssTextareaMask /> */}

        <Editor
          height="100vh"
          width="100%"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          value={cssCode}
        />
      </CssTextareaEditContainer>
    </CssTextareaContainer>
  );
};
