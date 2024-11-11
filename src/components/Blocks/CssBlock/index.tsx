'use client';

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { IoCopy } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

import './CssBlock.scss';

export type CssBlockPropsType = {
  code: string;
};

export const CssBlock = ({ code }: CssBlockPropsType) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true);

        setTimeout(() => {
          setIsClicked(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="css-block">
      <div className="css-block__header">
        <h3 className="css-block__title">CSS code</h3>
        <button onClick={handleCopy} className="css-block__button">
          {isClicked ? <FaCheck /> : <IoCopy />}
        </button>
      </div>

      <div className="css-block__highlighter">
        <SyntaxHighlighter
          language="css"
          style={nightOwl}
          wrapLongLines={true}
          customStyle={{ height: '100%' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
