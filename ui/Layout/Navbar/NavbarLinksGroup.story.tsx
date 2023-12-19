
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import NavbarNested from './Navbar';

export default { title: 'NavbarNested' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarNested} />;
}