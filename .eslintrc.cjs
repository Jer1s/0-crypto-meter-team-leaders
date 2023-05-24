module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-hooks', 'react-refresh', 'jsx-a11y', '@emotion', '@tanstack/query'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-key': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    radix: 'off',
    'default-case': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-danger': 'off',
    'arrow-body-style': ['error', 'always'],
    'import/no-unresolved': 'off',
    '@emotion/pkg-renaming': 'error',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'import/no-extraneous-dependencies': [
      'error',
    ],
  },
};
