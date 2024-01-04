"use client"
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import NavbarNested from './NavbarNested/NavbarNested';
import { ReactNode } from 'react';
import { IconBrandMantine, IconDog } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './Layout.module.css';

type LayoutProps = {
    children: ReactNode
}
function Layout({ children }: LayoutProps) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <IconBrandMantine       color="var(--mantine-color-blue-filled)" size={50} />
                </Group>
            </AppShell.Header>
            <NavbarNested />
            <AppShell.Main className={classes.main} pt={80}>{children}</AppShell.Main>
        </AppShell>
    );
}
export default Layout