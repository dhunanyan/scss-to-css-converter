'use client';

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { IoCopy, IoDownload } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { siteContent } from '@data';

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
        console.error(siteContent.blocks.copyErrorPrefix, err);
      });
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/css;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = siteContent.blocks.downloadFileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="css-block">
      <div className="css-block__header">
        <h3 className="css-block__title">{siteContent.blocks.cssTitle}</h3>
        <div className="css-block__actions">
          <button onClick={handleDownload} className="css-block__button" aria-label={siteContent.blocks.downloadButtonLabel}>
            <IoDownload />
          </button>
          <button onClick={handleCopy} className="css-block__button" aria-label={siteContent.blocks.copyButtonLabel}>
            {isClicked ? <FaCheck /> : <IoCopy />}
          </button>
        </div>
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
