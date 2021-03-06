module.exports = function () {
  return {
    files: ['src/**/*.ts', '!src/tests/**/*.test.ts', 'src/data/*.txt'],
    tests: ['src/tests/unit-tests/**/*.test.ts'],
    env: {
      type: 'node',
    },
    testFramework: 'jasmine',
  };
};
