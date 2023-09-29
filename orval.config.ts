export default {
  petstore: {
    output: {
      mode: 'single',
      target: 'src/generated/mybe.ts',
      client: 'react-query',
      mock: false,
    },
    input: {
      target: 'http://localhost:2000/api-yaml',
    },
  },
};