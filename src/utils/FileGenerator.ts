import {writeFile} from 'fs/promises';

export class FileGenerator {
    async generate(filePath: string, data: string): Promise<string> {
        try {
            await writeFile(filePath, data);
            return filePath;
        } catch(err) {
            throw new Error('Error occurred during creation of the file : ' + filePath);
        }
    }
}