const fs = require("fs");

function getCurrentDir() {
  const currentDir = process.env.PWD;
  const sourceDir = "/src";

  fs.promises
    .access(`${currentDir}${sourceDir}`)
    .catch(() =>
      console.warn(`Warning: there is no ${sourceDir} folder in ${currentDir}`)
    );

  return currentDir;
}

module.exports = getCurrentDir;
