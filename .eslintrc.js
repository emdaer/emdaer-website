module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest', 'prettier'],
  env: { 'jest/globals': true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  settings: {
    'import/core-modules': [
      'react',
      'prop-types',
      'react-helmet',
      'styled-components',
    ],
  },
  globals: {
    graphql: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['scripts/**'] },
    ],
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'import/no-dynamic-require': ['off'],
    'global-require': ['off'],
    'no-new': ['off'],
    'react/jsx-filename-extension': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
  },
};
