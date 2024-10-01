import Editor from "@monaco-editor/react";
import {
  ScssTextareaContainer,
  ScssTextareaHeader,
  ScssTextareaHeaderTitle,
} from "./ScssTextarea.styles";

export const ScssTextarea = ({ editorRef }) => {
  const file = {
    name: "input.scss",
    language: "scss",
    value: "",
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <ScssTextareaContainer>
      <ScssTextareaHeader>
        <ScssTextareaHeaderTitle>SCSS code</ScssTextareaHeaderTitle>
      </ScssTextareaHeader>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </ScssTextareaContainer>
  );
};
