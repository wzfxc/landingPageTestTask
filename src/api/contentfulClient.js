/**
 * Contentful CMS Client
 *
 * Centralised client instance for the Content Delivery API.
 * Swap these values with environment variables in production:
 *   VITE_CONTENTFUL_SPACE_ID, VITE_CONTENTFUL_ACCESS_TOKEN
 */
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
