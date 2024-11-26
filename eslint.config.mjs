import globals from 'globals';
import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import vitest from '@vitest/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
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

// Vitest configuration
const vitestConfig = {
  files: ['**/*.test.{ts,tsx}'],
  plugins: {
    vitest,
  },
  rules: {
    ...vitest.configs.recommended.rules,
    'vitest/max-nested-describe': ['error', { max: 3 }],
  },
};

// Playwright configuration
const playwrightConfig = {
  ...playwright.configs['flat/recommended'],
  files: ['e2e/**', '**/*.spec.{ts,tsx}'],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
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
  vitestConfig,
  playwrightConfig,
  customRulesConfig,
  eslintConfigPrettier,
  ignoresConfig,
];
