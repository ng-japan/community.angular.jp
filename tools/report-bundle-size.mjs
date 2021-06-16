#!/usr/bin/env zx
/* global $ */

(async () => {
  const prNumber = process.env.PR_NUMBER ?? null;
  const commitSha = process.env.COMMIT_SHA ?? null;

  $.verbose = false;

  const output = await $`bundlesize`;

  if (output.stderr) {
    process.stderr.write(output.stderr);
    process.exit(output.exitCode);
  }

  const files = output
    .toString()
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => line.trim().split(/\s+/).slice(1, 3));

  const content = [
    `## :package: bundlesize report (${commitSha})`,
    '',
    '| File | Size |',
    '| :--- | ---: |',
    ...files.map(([path, size]) => `| \`${path.replace(/:$/, '')}\` | ${size} |`),
  ].join('\n');

  if (prNumber) {
    await $`gh pr comment ${prNumber} --body="${output}"`;
  } else {
    process.stdout.write(content.toString() + '\n');
  }
})();
