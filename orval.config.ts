export default {
  'petstore-file': {
    input: './petstore.yaml',
    output: {
      mode: 'tags-split',
      target: 'petstore.ts',
      schemas: 'model',
      client: 'react-query',
    },

  },
};