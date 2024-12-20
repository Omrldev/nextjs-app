import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { plugins } from "eslint-config-standard";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // it will warn you about writing code that affects the Core Web Vitals
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint-config-standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),

  {
    plugins: ["import"],  

    rules: {
      "import/order": [
        "error",
        {
          "groups": [
            "builtin", // Built-in types are first
            "external", // External libraries
            "internal", // Internal modules
            [
              "parent",
              "sibling"
            ], // Parent and sibling types can be mingled together
            "index", // Then the index file
            "object" // Object imports
          ],
          "newlines-between": "always",
          "pathGroups": [
            {
              "pattern": "@app/**",
              "group": "external",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": [
            "builtin"
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    },
    ignorePatterns: [
      "components/ui/**"
    ],
    overrides: [
      {
        "files": [
          "*.ts",
          "*.tsx"
        ],
        "rules": {
          "no-undef": "off"
        }
      }
    ]
  }
];

export default eslintConfig;
