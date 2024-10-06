import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['client/src/**/*.jsx']
  },
  {
    ignores: ['client/build/', 'server/build/', 'server/config/', 'server/controllers/', 'client/src/utilities/', 'server/routes/', 'server/server.js']
  },
  {
    rules: {
      'no-console': 'off',
      'react/prop-types': ['off'],
      'react/react-in-jsx-scope': ['off']
    }
  },
  eslintConfigPrettier
];
