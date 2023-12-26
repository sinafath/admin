import './global.css';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript, DirectionProvider } from '@mantine/core';
import { theme } from '../theme';
import getAccessToken from '@/libs/http/cookies/accessToken';
import YekanBakhFaNumReg from '../libs/assets/font/font';
import getNotification from '@/libs/http/cookies/notification';
import Notification from './_ui.tsx/Notification';
import { Notifications } from '@mantine/notifications';

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
  const notification = getNotification()
  console.log(notification)
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
          <MantineProvider theme={theme}>
          <Notifications />
            <Notification message={notification?.value} />
            {isLoggedIn?.value && isLoggedIn.value !== "" ? dashboard : login}</MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
