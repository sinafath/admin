"use client"
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import NavbarNested from './NavbarNested/NavbarNested';
import { ReactNode } from 'react';
import { IconDog } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

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
                    <IconDog size={30} />
                </Group>
            </AppShell.Header>
            <NavbarNested />
            <AppShell.Main m={70} my={0} pt={80}>{children}</AppShell.Main>
        </AppShell>
    );
}
export default Layout