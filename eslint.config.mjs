import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/**
 * ESLint flat config for TypeScript projects
 * See: https://eslint.org/docs/latest/use/configure/configuration-files-new
 */
export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      semi: ["error", "always"],
      "no-var": ["error"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": [1, { max: 1 }],
      "no-unused-vars": "warn",
      "object-curly-spacing": ["error", "always"],
      "no-duplicate-imports": ["warn"],
    },
  },
  {
    ignores: [
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "allure-results/**",
      "artifacts/**",
      "ctrf/**",
      "lighthouse/**",
      "screenshots/**",
      "qaops-nrql/**",
      "candidate-projects/**",
      "github-pages/**",
    ],
  },
];
