'use client';
import * as React from 'react';
import Editor from '@monaco-editor/react';
import { siteContent } from '@data';

import './ScssBlock.scss';

export type ScssBlockPropsType = {
  code: string;
  onChange: (value: string | undefined) => void;
};

const DEFAULT_VALUE = `// HOW TO USE THE TOOL?
//
// - Drag & Drop your \`input.scss\` HERE
// - Copy & Paste your \`scss\` code
// - Write your \`scss\` code directly in this editor
// 
// Click on the \`Convert\` button
// HAVE FUN!!`;

export const ScssBlock = ({ code, onChange }: ScssBlockPropsType) => (
  <div className="scss-block">
    <div className="scss-block__header">
      <h3 className="scss-block__title">{siteContent.blocks.scssTitle}</h3>
    </div>
    <div className="scss-block__editor">
      <Editor
        height="400px"
        theme="vs-dark"
        path={siteContent.blocks.inputPath}
        defaultLanguage="scss"
        defaultValue={DEFAULT_VALUE}
        value={code}
        onChange={(value) => onChange(value)}
        loading
      />
    </div>
  </div>
);
