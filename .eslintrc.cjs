module.exports = {
   root: true,
   env: {browser: true, es2020: true},
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
   ],
   plugins: ["simple-import-sort"],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['react-refresh'],
   rules: {
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true},],
      "indent": ["error", 3],
      "no-multiple-empty-lines": ["error", {"max": 1}],
      "no-mixed-spaces-and-tabs": "off",
      "no-tabs": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": ["warn", {"varsIgnorePattern": "^_$"}],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "space-before-function-paren": "off",
      "comma-dangle": "warn",
      "sort-imports": ["off", {
         "ignoreCase": true,
         "ignoreDeclarationSort": false,
         "ignoreMemberSort": false,
         "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
         "allowSeparatedGroups": true
      }],
      "sort-keys": ["off", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
      "sort-vars": ["error", {"ignoreCase": true}],
      "key-spacing": ["error", {
         "multiLine": {
            "beforeColon": false,
            "afterColon": true
         }
      }],
      "curly": "off",
      "no-return-assign": "off",
      "array-callback-return": "off",
      "@typescript-eslint/no-unused-vars": "off",
   },
}
