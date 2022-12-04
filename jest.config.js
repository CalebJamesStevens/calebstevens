/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^Navbar$': '<rootDir>/src/Components/Navbar/Navbar.js',
    '^ProjectCard$': '<rootDir>/src/Components/HomePage/ProjectCard/ProjectCard.js',
    '^Quiz$': '<rootDir>/src/Components/Quiz/Quiz.js',
    '^Question$': '<rootDir>/src/Components/Quiz/Question/Question.js',
    '^ArticleWrapper$': '<rootDir>/src/Components/ArticleWrapper/ArticleWrapper.js',
    '^react-testing-library$': '<rootDir>/src/react-testing-library.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
