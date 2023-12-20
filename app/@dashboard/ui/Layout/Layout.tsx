"use client"
import { AppShell, ScrollArea } from '@mantine/core';
import NavbarNested from './NavbarNested/NavbarNested';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
}
function Layout({ children }: LayoutProps) {
    return (
        <AppShell navbar={{ width: 300, breakpoint: 300 }}>
            <NavbarNested />
            <AppShell.Main m={70}>{children}</AppShell.Main>
        </AppShell>
    );
}
export default Layout