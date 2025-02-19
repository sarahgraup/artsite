import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
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
    rules: {
      // Base rules
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "jsx-quotes": ["error", "prefer-single"],
      "no-else-return": "off",
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "no-shadow": "off",

      // TypeScript specific rules
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",

      // Import rules
       "padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "import", next: "*" },
    { blankLine: "any", prev: "import", next: "import" }
  ]
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

];
