#!/usr/bin/env zx
/* global $ */

const fs = require('fs');
const globby = require('globby');
const filesize = require('filesize');

const commitSha = process.env.COMMIT_SHA ?? null;
const prNumber = process.env.PR_NUMBER ?? null;
const globPatterns = ['dist/app/*.{js,css}'];

(async () => {
  const files = await globby(globPatterns);

  const fileStats = files.map((filePath) => {
    const stat = fs.statSync(filePath);
    return [filePath, filesize(stat.size)];
  });

  const content = [
    `## :package: bundlesize report (${commitSha})`,
    '',
    '| File | Size |',
    '| :--- | ---: |',
    ...fileStats.map(([filePath, size]) => `| \`${filePath}\` | ${size} |`),
  ].join('\n');

  if (prNumber) {
    // eslint-disable-next-line no-useless-escape
    await $`gh pr comment ${prNumber} --body=${content}`;
  } else {
    process.stdout.write(content.toString() + '\n');
  }
})();
