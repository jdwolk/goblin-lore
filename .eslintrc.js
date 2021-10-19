module.exports = {
  extends: [
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    camelcase: ['off'],
    'no-nested-ternary': ['off'],
    'no-console': ['off'],
    'no-underscore-dangle': ['off'],
  },
};
