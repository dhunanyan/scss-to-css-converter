import type { Metadata } from 'next';
import { HtmlMetaData } from '@data';

import './globals.scss';

export const metadata: Metadata = HtmlMetaData['index'];

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" sizes="32x32" href="./favicon.ico" />
        <meta name="theme-color" content="#0a192f" />
      </head>
      <body>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
