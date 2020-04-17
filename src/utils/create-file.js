export default fs =>
  async function createFile(filePath, data) {
    return fs.promises.writeFile(filePath, data, err => {
      if (err) {
        Promise.reject(err);
      }
      Promise.resolve(filePath);
    });
  };
