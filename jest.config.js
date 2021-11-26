module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  moduleNameMapper: {
    '@app/*': '<rootDir>/src/*',
    '^@testing-library$': '<rootDir>/testing-library.config.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|twrnc)',
  ],
};
