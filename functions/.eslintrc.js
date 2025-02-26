module.exports = {
  root: true,
  env: {
    es2017: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: ['promise'],
  rules: {
    'linebreak-style': 0,
  },
};
