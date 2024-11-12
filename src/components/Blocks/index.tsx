'use client';
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { convert } from '@dhunanyan/scss-to-css-converter';

import { CssBlock } from './CssBlock';
import { ScssBlock } from './ScssBlock';

import './Blocks.scss';

export const Blocks = () => {
  const [SCSS, setSCSS] = React.useState<string>('');
  const [CSS, setCSS] = React.useState<string>('');

  const handleChange = (value: string | undefined) => {
    if (!value) {
      return;
    }

    setSCSS(value);
  };

  const handleClick = () => {
    setCSS(convert(SCSS).CSS);
  };

  return (
    <div className="blocks">
      <div className="blocks__container">
        <ScssBlock code={SCSS} onChange={handleChange} />
        <button
          className="blocks__button blocks__button--alternative"
          onClick={() => {
            handleClick();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
        >
          CONVERT
        </button>
        <CssBlock code={CSS} />
      </div>
      <button className="blocks__button" onClick={handleClick}>
        CONVERT
      </button>
    </div>
  );
};
