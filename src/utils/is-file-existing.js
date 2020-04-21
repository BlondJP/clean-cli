export default (fs) =>
  async function isFileExisting(filePath) {
    try {
      await fs.promises.access(filePath, (err) => Promise.resolve(!err));
      return true;
    } catch (err) {
      return false;
    }
  };
