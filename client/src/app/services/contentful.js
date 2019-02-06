//====================================================|
// // SERVICES: CONTENTFUL


//--------------------------| Import

// Libraries
import { createClient } from 'contentful';
import { parse } from 'flatted/esm';


//--------------------------| Request content

const requestContent = async (contentfulAccessToken, contentfulSpace) => {
  const client = createClient({
    environment: process.env.NODE_ENV === 'development' ? 'master' : 'production',
    accessToken: contentfulAccessToken,
    space: contentfulSpace,
    resolveLinks: true
  });

  const storageContent = localStorage.getItem('art_content');

  try {
    const entries = await client.getEntries();
    const content = entries.items.filter(item => item.sys.contentType.sys.id === 'gallery')[0];

    return Promise.resolve(content);
  }
  catch (error) {
    if (storageContent) {
      return Promise.resolve(parse(storageContent));
    }

    return Promise.reject(new Error('No content found.'));
  }
};


//--------------------------| Export

export default requestContent;
