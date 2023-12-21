import './global.css';

import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript, DirectionProvider } from '@mantine/core';
import { theme } from '../theme';
import getAccessToken from '@/libs/cookies/cookies';
import YekanBakhFaNumReg from './libs/font/font';

export const metadata = {
  title: 'Dashboaard',
  description: 'I am using Next.js!',
};
type RootLayoutProps = {
  dashboard: ReactNode
  login: ReactNode
}

export default function RootLayout({ login, dashboard }: RootLayoutProps) {
  const isLoggedIn = getAccessToken()
  console.log({isLoggedIn})
  return (
    <html lang="fa" dir="rtl" >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={YekanBakhFaNumReg.className}>
        <DirectionProvider initialDirection='rtl'>
          <MantineProvider theme={theme}>{isLoggedIn?.value !== ""  ? dashboard : login}</MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
