import * as React from 'react';
import { Blocks } from '@components';

import { SiSass as ScssIcon } from 'react-icons/si';
import { FaCss3Alt as CssIcon } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight as ArrowIcon } from 'react-icons/md';

import './page.scss';

export default function Page() {
  return (
    <main className="page">
      <div className="page__container">
        <div className="page__content">
          <h1 className="page__title">
            <span>
              <ScssIcon />
            </span>
            <span>
              <ArrowIcon />
            </span>
            <span>
              <CssIcon />
            </span>
          </h1>
          <p className="page__description">
            Welcome to the SCSS to CSS Converter website! This platform offers a
            simple and efficient solution for converting SCSS (Sassy CSS) code
            into traditional CSS. We aim to provide you with a seamless
            experience and essential features for converting your SCSS code
            effortlessly.
          </p>
        </div>
        <Blocks />
      </div>
    </main>
  );
}
