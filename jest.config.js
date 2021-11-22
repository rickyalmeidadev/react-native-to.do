module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@app/*': '<rootDir>/src/*',
    '^@testing-library$': '<rootDir>/testing-library.config.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|twrnc)',
  ],
};
