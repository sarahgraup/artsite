import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "**/node_modules/*",
      "**/.next/*",
      "**/dist/*",
      "**/build/*",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },
  {
    files: ["app/**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      react: pluginReact,
      "@next/next": nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Base rules
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-unused-vars": "off",
      quotes: ["error", "single"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "no-undef": "warn",
      "jsx-quotes": ["error", "prefer-single"],
      "no-else-return": "off",
      "object-curly-spacing": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "arrow-parens": ["error", "always"],
      "no-shadow": "off",

      eqeqeq: "error",
      "no-console": "warn",

      // React rules
      "react/no-unescaped-entities": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      // TypeScript specific rules
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",

      // Import rules
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],
    },
  },
];
