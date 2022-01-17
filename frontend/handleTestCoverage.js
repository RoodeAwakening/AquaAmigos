/* eslint-disable */
const fs = require('fs');
const { exec, execSync } = require('child_process');

console.log('custom > commit-msg');
console.log('Running test coverage... [started]');

const changes = execSync('git status --porcelain')
  .toString()
  .split('\n')
  .filter(change => !!change).length > 0;

function popStash() {
  if (changes) {
    execSync('git stash pop -q');
  }
}

// stash changes
if (changes) {
  execSync('git stash -q --keep-index');
}

exec('npm run test -- --coverage --watchAll=false --verbose', (execErr, coverageTable, testResults) => {
  // Display the test results and the coverage table
  console.log('testResults', testResults);
  console.log('coverageTable', coverageTable);

  if (execErr) {
    console.log(execErr);
    console.log('Some of your tests have failed to pass. Scroll up to view details.');
    popStash();
    process.exit(1);
  }

  const reg = /(?:\| *)(\d{1,3}(?:\.\d{1,2})?)(?: *\|)/;
  const coverageResult = Number(coverageTable.match(reg)[1]);

  fs.readFile('testCoverageThreshold.json', 'utf8', (readErr, data) => {
    if (readErr) {
      popStash();
      throw readErr;
    }
    const thresholdJson = JSON.parse(data);
    const currentCoverageLimit = thresholdJson.threshold;

    if (coverageResult < currentCoverageLimit) {
      console.log(`Coverage threshold for statements (${currentCoverageLimit}) not met: ${coverageResult}.`);
      console.log('Test coverage has fallen below the threshold. You may still be able to push your changes, please wait for additional logging.');
    }

    if (coverageResult <= currentCoverageLimit - 0.5) {
      console.log('Test coverage is too far below the threshold. Please update unit tests and try again.');
      popStash();
      process.exit(1);
    } else if (coverageResult > currentCoverageLimit) {
      console.log('Total coverage increased. Updating threshold...');
      const oldStatements = `"threshold": ${currentCoverageLimit}`;
      const re = new RegExp(oldStatements, 'g');
      const result = data.replace(re, `"threshold": ${coverageResult}`);

      fs.writeFileSync('testCoverageThreshold.json', result, 'utf8', (writeErr) => {
        popStash();
        console.log(writeErr);
      });

      execSync('git add testCoverageThreshold.json');
      popStash();
      console.log(`Coverage threshold file has been updated from ${currentCoverageLimit} to ${coverageResult}.`);
      console.log('Please commit that file, and push again.');
      process.exit(1);
    }

    // retrieve changes and update testCoverageThreshold.json
    console.log('Applying changes... [started]');
    execSync('git add -u');
    popStash();
    console.log('Applying changes [completed]');

    console.log('Running test coverage [completed]');
    process.exit(0);
  });
});
