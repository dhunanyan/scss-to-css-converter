import * as React from 'react';
import { Blocks } from '@components';
import { siteContent } from '@data';

import './page.scss';

export default function Page() {
  const { title } = siteContent.page;

  return (
    <main className="page">
      <div className="page__container">
        <h1 className="page__title">
          <span>{title.left}</span>
          {title.middle}
          <span>{title.right}</span>
          {title.suffix}
        </h1>
        <Blocks />
      </div>
    </main>
  );
}
