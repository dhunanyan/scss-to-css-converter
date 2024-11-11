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
        {/* {errorMessage && showErrorPopup && (
            <ErrorPopup
              errorMessage={errorMessage.message}
              name={errorMessage.name}
              closePopup={() => {
                setShowErrorPopup(false);
              }}
            />
          )}
          {isLoading && <Spinner />} */}
        <ScssBlock code={SCSS} onChange={handleChange} />
        <CssBlock code={CSS} />
      </div>
      <button className="blocks__button" onClick={handleClick}>
        Convert
      </button>
    </div>
  );
};
