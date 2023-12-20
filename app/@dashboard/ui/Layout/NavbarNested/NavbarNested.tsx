import { Group, Code, ScrollArea, rem, AppShell } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconLogout,
} from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import Logo from './Logo';
import classes from './NavbarNested.module.css';
import { IconSwitchHorizontal } from '@tabler/icons-react';
import Footer from '../Footer/Footer';

const mockdata = [
  
  { label: 'محصول', icon: IconAdjustments },
  {
    label: 'کاربر',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'نقش ها', link: '/' },
      { label: 'کاربران', link: '/' },
      { label: 'مجوز ها', link: '/' }
    ],
  }

];

function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <AppShell.Navbar className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <Footer />
    </AppShell.Navbar>
  );
}
export default NavbarNested