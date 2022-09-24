/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';

export const embedCode = component({
  label: 'EmbedCode',
  schema: {
    codeSrc: fields.text({
      label: 'Code',
      defaultValue: '<p>Hello world</p>',
    }),
  },
  preview: function EmbedCode(props) {
    return (
      <div>
        <NotEditable>
          <div dangerouslySetInnerHTML={{ __html: props.fields.codeSrc.value }} />
        </NotEditable>
      </div>
    );
  },
});
