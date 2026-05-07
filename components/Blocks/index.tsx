'use client';
import * as React from 'react';
import { siteContent } from '@data';

import { CssBlock } from './CssBlock';
import { ScssBlock } from './ScssBlock';

import './Blocks.scss';

type ConvertApiResponse = {
  css: string;
  error?: string;
};

export const Blocks = () => {
  const [SCSS, setSCSS] = React.useState<string>('');
  const [CSS, setCSS] = React.useState<string>('');

  const handleChange = (value: string | undefined) => {
    if (!value) {
      return;
    }

    setSCSS(value);
  };

  const handleClick = async () => {
    try {
      const res = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scss: SCSS }),
      });

      const payload = (await res.json()) as ConvertApiResponse;

      if (!res.ok) {
        setCSS(payload.error ?? 'Conversion failed.');
        return;
      }

      setCSS(payload.css);
    } catch (error) {
      setCSS(error instanceof Error ? error.message : 'Unexpected error.');
    }
  };

  return (
    <div className="blocks">
      <div className="blocks__container">
        <ScssBlock code={SCSS} onChange={handleChange} />
        <button
          className="blocks__button blocks__button--alternative"
          onClick={() => {
            void handleClick();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
        >
          {siteContent.blocks.convertButtonLabel}
        </button>
        <CssBlock code={CSS} />
      </div>
      <button className="blocks__button" onClick={() => void handleClick()}>
        {siteContent.blocks.convertButtonLabel}
      </button>
    </div>
  );
};
