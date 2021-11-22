module.exports = {
  env: {
    jest: true,
  },
  extends: ['@react-native-community'],
  plugins: ['testing-library'],
  root: true,
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
