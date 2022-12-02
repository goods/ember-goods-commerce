import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

let stories = storiesOf('Components/Commerce/Tickets/Selector');
stories.add(
  'Default',
  () => {
    return {
      template: hbs`
        <Goods::Commerce::Tickets::Selector />
      `,
      context: {},
    };
  },
  {
    controls: { hideNoControlsWarning: true },
  }
);
