// jest.config.js
module.exports = {
    preset: 'ts-jest',
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    testEnvironment: 'jsdom',
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

    // // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
    //   '@core': '<rootDir>/src/core',
    //   '@hooks': '<rootDir>/src/hooks',
      '@components': '<rootDir>/src/components'
    },

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

    // Module file extensions for importing
    moduleFileExtensions: ['js', 'jsx', 'json', 'node']
  }