/**
 * Contentful CMS Client
 *
 * Centralised client instance for the Content Delivery API.
 * Swap these values with environment variables in production:
 *   VITE_CONTENTFUL_SPACE_ID, VITE_CONTENTFUL_ACCESS_TOKEN
 */
import { createClient } from 'contentful';

const client = createClient({
  space: 'zo6zpg4e4l7m',
  environment: 'master',
  accessToken: 'yc44lT9GKwirLKTNiVkNPn1DtN8Y2E7IYX3ZAj9YrEY',
});

export default client;
