module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@vue/prettier", "plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": "warn",
  },
};
