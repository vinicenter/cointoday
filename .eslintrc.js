module.exports = {
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  overrides: [
    {
      files: ['*'], // Or *.test.js
      rules: {
        'vuejs-accessibility/anchor-has-content': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/eslint-config-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
};
