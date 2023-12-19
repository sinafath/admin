
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import  AuthenticationImage  from './AuthenticationImage';
import attributes from './attributes.json';

export default { title: 'AuthenticationImage' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={AuthenticationImage} />;
}