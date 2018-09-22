module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
  },
};
