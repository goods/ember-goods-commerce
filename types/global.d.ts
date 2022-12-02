// Types for compiled templates
declare module '@goods/ember-goods-commerce/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
