
import { StoryWrapper } from '@/libs/storybook/StoryWrapper/StoryWrapper';
import { Table } from '../../../app/@dashboard/(products)/_ui/Table';
import attributes from '../../../app/@dashboard/(products)/Table/attributes.json';

export default { title: 'Table' };


export function Usage() {
  return <StoryWrapper attributes={attributes} component={Table} />;
}