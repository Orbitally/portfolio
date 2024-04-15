import contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

export interface Project {
  contentTypeId: 'project';
  fields: {
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    columnNumber: EntryFieldTypes.Integer;
    content: EntryFieldTypes.RichText;
    slug: EntryFieldTypes.Text;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
