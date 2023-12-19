import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript, DirectionProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
type RootLayout = {
  dashboard: ReactNode
  login:ReactNode
}
export default function RootLayout({ login,dashboard }: RootLayout) {
  const isLoggedIn = false
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
          <MantineProvider theme={theme}>{isLoggedIn ?dashboard : login}</MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
