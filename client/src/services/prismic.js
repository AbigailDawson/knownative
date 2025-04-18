import * as prismic from '@prismicio/client';

const repositoryName = 'knownative';

export const client = prismic.createClient(repositoryName);
