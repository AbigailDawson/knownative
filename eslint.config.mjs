import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['src/**/*.jsx']
  },
  {
    ignores: ['build/', 'config/', 'controllers/', 'src/utilities/', 'routes/', 'server.js']
  },
  {
    rules: {
      'no-console': ['error'],
      'react/prop-types': ['off'],
      'react/react-in-jsx-scope': ['off']
    }
  },
  eslintConfigPrettier
];
