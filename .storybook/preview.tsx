import '@mantine/core/styles.css';
import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { DirectionProvider, MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from '../theme';

const channel = addons.getChannel();

export const globalTypes = {
  rtlDirection: {
    description: 'HTML dir attribute',
    defaultValue: 'rtl',
  },
};

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <DirectionProvider initialDirection='rtl'><MantineProvider theme={theme}>{renderStory()}</MantineProvider></DirectionProvider>,
];
