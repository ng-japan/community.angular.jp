module.exports = {
  // `import.meta` requires ESM support
  preset: 'jest-preset-angular/presets/defaults-esm',
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
