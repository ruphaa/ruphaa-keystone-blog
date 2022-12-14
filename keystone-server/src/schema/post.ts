import path from 'path';
import { list } from '@keystone-6/core';
import { select, timestamp, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { componentBlocks } from '../component-blocks';

export const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    type: select({
      type: 'enum',
      options: [
        { label: 'Blog', value: 'blog' },
        { label: 'Notes', value: 'notes' },
        { label: 'Garden', value: 'garden' },
        { label: 'Book notes', value: 'book' },
      ],
      defaultValue: 'blog',
      ui: {
        displayMode: 'segmented-control',
        description: 'Used to tag the type of content.',
      },
    }),
    status: select({
      type: 'enum',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      ui: { displayMode: 'segmented-control' },
    }),
    publishDate: timestamp(),
    author: relationship({ ref: 'User.posts', many: false }),
    metaDescription: text({
      ui: {
        displayMode: 'textarea',
        description: '(Optional) Only used in meta tags for SEO purposes.',
      },
    }),
    metaImageUrl: text({
      ui: {
        description: '(Optional) Only used in meta tags for SEO purposes.',
      },
    }),
    metaImageAltText: text({
      ui: {
        description: '(Optional) If you added Meta Image Url, alt text for it.',
      },
    }),
    content: document({
      // a fully featured document editor with all of the formatting abilities
      formatting: true,
      dividers: true,
      links: true,
      // grid layout options
      layouts: [
        [1, 1], // grid layout 1fr 1fr
        [1, 1, 1], // grid layout 1fr 1fr 1fr
      ],
      ui: {
        views: path.join(process.cwd(), './src/component-blocks'),
      },
      componentBlocks,
    }),
  },
});
