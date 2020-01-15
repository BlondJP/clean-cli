import fs from "fs";

export default async function createFile(filePath, data) {
  fs.writeFile(filePath, data, err => {
    if (err) {
      Promise.reject(err);
    }
    Promise.resolve(filePath);
  });
}
