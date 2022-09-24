/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';

export const image = component({
  label: 'Image',
  schema: {
    imageSrc: fields.text({
      label: 'Image URL',
      defaultValue: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    }),
    altText: fields.text({
      label: 'Alt Text',
      defaultValue: 'A gradient image with mix of multiple colors',
    }),
  },
  preview: function Image(props) {
    return (
      <div>
        <NotEditable>
          <div
            css={{
              backgroundImage: `url(${props.fields.imageSrc.value})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              paddingTop: '56.25%',
              height: 0,
              width: '100%',
            }}
          />
        </NotEditable>
        <div css={{ textAlign: 'center' }}>{props.fields.altText.value}</div>
      </div>
    );
  },
});
