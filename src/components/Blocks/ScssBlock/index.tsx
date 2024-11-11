'use client';
import * as React from 'react';
import Editor from '@monaco-editor/react';

import './ScssBlock.scss';

export type ScssBlockPropsType = {
  code: string;
  onChange: (value: string | undefined) => void;
};

export const ScssBlock = ({ code, onChange }: ScssBlockPropsType) => (
  <div className="scss-block">
    <div className="scss-block__header">
      <h3 className="scss-block__title">SCSS code</h3>
    </div>
    <div className="scss-block__editor">
      <Editor
        height="400px"
        theme="vs-dark"
        path="input.scss"
        defaultLanguage="scss"
        defaultValue=""
        value={code}
        onChange={(value) => onChange(value)}
      />
    </div>
  </div>
);
