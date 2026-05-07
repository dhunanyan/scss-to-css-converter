import type { Metadata } from 'next';
import { HtmlMetaData } from '@data';
import { Header } from '@components';

import './globals.scss';

export const metadata: Metadata = {
  ...HtmlMetaData['index'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
