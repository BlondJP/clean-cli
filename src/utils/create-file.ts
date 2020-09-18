export default (fs) =>
  async function createFile(filePath: string, data: string): Promise<string> {
    return fs.promises.writeFile(filePath, data, (err: any) => {
      if (err) {
        Promise.reject(err);
      }
      Promise.resolve(filePath);
    });
  };
