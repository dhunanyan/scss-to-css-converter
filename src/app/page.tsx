import * as React from 'react';
import { Blocks } from '@components';

import './page.scss';

export default function Page() {
  return (
    <main className="page">
      <div className="page__container">
        <h1 className="page__title">
          <span>SCSS</span>to<span>CSS</span>Converter
        </h1>
        <Blocks />
      </div>
    </main>
  );
}
