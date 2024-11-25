import globals from 'globals';
import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

// Base configuration for all files
const baseConfig = {
  languageOptions: {
    ecmaVersion: 'latest',
    globals: { ...globals.browser, ...globals.node },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

// TypeScript configuration
const tsConfig = {
  ...tseslint.configs.recommended,
  files: ['**/*.{ts,tsx}'],
};

// Next.js configuration
const nextConfig = {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    '@next/next/no-img-element': 'off',
  },
};

// Custom rules configuration
const customRulesConfig = {
  rules: {
    // Add custom rules here
  },
};

// Global ignores
const ignoresConfig = {
  ignores: ['.next/*', 'node_modules/*', 'dist/*', 'build/*'],
};

export default [
  baseConfig,
  tsConfig,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  nextConfig,
  customRulesConfig,
  eslintConfigPrettier,
  ignoresConfig,
];
