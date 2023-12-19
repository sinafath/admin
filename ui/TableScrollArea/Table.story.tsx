
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import { Table } from './Table';
import attributes from './attributes.json';

export default { title: 'Table' };


export function Usage() {
  return <StoryWrapper attributes={attributes} component={Table} />;
}