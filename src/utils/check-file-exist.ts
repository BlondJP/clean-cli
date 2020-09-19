export default (fs: any) =>
  async function checkFileExist(filePath: string): Promise<boolean> {
    try {
      await fs.promises.access(filePath, (err: any) => Promise.resolve(!err));
      return true;
    } catch (err) {
      return false;
    }
  };
