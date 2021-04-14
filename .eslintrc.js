module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:jest/recommended',
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'jsx-quotes': ['error', 'prefer-single']
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
