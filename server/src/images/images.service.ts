import { FilesService } from './../files/files.service';
import { DeleteImageDto } from './dto/delete-image.dto';
import { IUserRequest, IUserImage } from './../types/user.d';
import { CreateImageDto } from './dto/create-image.dto';
import { GetImagesDto } from './dto/get-images.dto';
import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';

@Injectable()
export class ImagesService {
  constructor(
    private readonly prisma: PrismaService,
    private usersService: UsersService,
    private filesService: FilesService
  ) {}

  // получить картинки со скипом
  async getImages(dto: GetImagesDto) {
    const counter = dto.counter;

    try {
      const images = await this.prisma.image.findMany({
        skip: 11 * counter,
        take: 11,
      });
      return images;
    } catch (err) {
      throw err;
    }
  }

  async postImage(
    dto: CreateImageDto,
    image: Express.Multer.File,
    req: IUserRequest
  ) {
    const { name, description, coordX, coordY } = dto;
    const { id: userId } = req.user;
    
    if (!name || !description) {
      return new HttpException('Invalid', HttpStatus.BAD_REQUEST);
    }
    const link = await this.filesService.createFile(image);

    try {
      // координаты минус
      if (!coordX || !coordY) {
        const newImage = await this.prisma.image.create({
          data: {
            name,
            description,
            link,
            userId,
          },
        });
        return newImage;
      } else {
        // координаты плюс
        const newImage = await this.prisma.image.create({
          data: {
            name,
            description,
            link,
            coordX,
            coordY,
            userId,
          },
        });
        return newImage;
      }
    } catch (err) {
      throw err;
    }
  }

  async deleteImage(dto: DeleteImageDto, req: IUserRequest) {
    const imageId = dto?.id;
    const userId = req.user.id;
    console.log(imageId, userId);

    if (!imageId) throw new HttpException('Invalid', HttpStatus.BAD_REQUEST);

    try {
      const image = await this.prisma.image.findFirst({
        where: {
          id: imageId,
        },
      });

      if (image.userId === userId) {
        await this.prisma.image.delete({
          where: {
            id: imageId,
          },
        });
        return 'image deleted successfully';
      } else {
        return new HttpException('you cannot delete', HttpStatus.BAD_REQUEST);
      }
    } catch (err) {
      throw err;
    }
  }
}
