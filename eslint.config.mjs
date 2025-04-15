import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from "eslint-plugin-perfectionist";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-interfaces": ["error"],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: "line-length",
      },
    },
  },
];

export default eslintConfig;
