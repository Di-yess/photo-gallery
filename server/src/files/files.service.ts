import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      const filePathOrigin = path.resolve(__dirname, '../../..', 'src/static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      // in build
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      // in origin
      fs.writeFileSync(path.join(filePathOrigin, fileName), file.buffer);
      return fileName;
    } catch (err) {
      throw new HttpException(
        'Error with writing a file',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
