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
  
  { label: 'محصولات', icon: IconAdjustments, link: '/' },
  { label: 'سفارش ها', icon: IconAdjustments, link: '/orders' },

  {
    label: 'کاربر',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'نقش ها', link: '/roles' },
      { label: 'کاربران', link: '/users' },
      { label: 'مجوز ها', link: '/permissions' }
    ],
  }

];

function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <AppShell.Navbar className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <Footer />
    </AppShell.Navbar>
  );
}
export default NavbarNested