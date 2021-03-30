module.exports = {
   parser: "babel-eslint",
   env: {
      es6: true,
      node: true,
      browser: true,
   },
   parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
         jsx: true,
      },
   },
   plugins: ["prettier", "react-hooks"],
   extends: ["plugin:prettier/recommended", "eslint:recommended", "react-app"],
   rules: {
      "prettier/prettier": "warn",
      "react/prop-types": 0,
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
   },
};
