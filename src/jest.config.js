module.exports = {
  // `import.meta` requires ESM support
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
