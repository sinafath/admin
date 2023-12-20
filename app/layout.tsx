import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript, DirectionProvider } from '@mantine/core';
import { theme } from '../theme';
import getAccessToken from '@/libs/cookies/cookies';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
type RootLayout = {
  children: ReactNode
  login: ReactNode
}
export default function RootLayout({ login, children }: RootLayout) {
  const isLoggedIn = getAccessToken()
  return (
    <html lang="fa" dir="rtl">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <DirectionProvider initialDirection='rtl'>
          <MantineProvider theme={theme}>{isLoggedIn ? children : login}</MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
