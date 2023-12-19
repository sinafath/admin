
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import { TableScrollArea } from './TableScrollArea';
import attributes from './attributes.json';

export default { title: 'TableScrollArea' };


export function Usage() {
  return <StoryWrapper attributes={attributes} component={TableScrollArea} />;
}