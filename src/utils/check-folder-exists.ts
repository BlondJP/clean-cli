export default (fs) => {
  async function isFolderExisting(folderPath) {
    try {
      await fs.promises.access(folderPath, (err) => Promise.resolve(!err));
      return true;
    } catch (err) {
      return false;
    }
  }

  function createFolder(folderPath) {
    return fs.promises.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        Promise.reject(err);
      } else {
        const sentence = `folder ${folderPath} has been created`;
        console.log(sentence);
        Promise.resolve(sentence);
      }
    });
  }

  return async function checkFolderExist(folderPath: string): Promise<boolean> {
    try {
      const exists = await isFolderExisting(folderPath);
      if (!exists) {
        await createFolder(folderPath);
      }
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  };
};
