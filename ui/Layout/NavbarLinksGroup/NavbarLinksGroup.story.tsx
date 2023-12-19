
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import { NavbarLinksGroup } from './NavbarLinksGroup';
import attributes from './attributes.json';

export default { title: 'NavbarLinksGroup' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarLinksGroup} />;
}