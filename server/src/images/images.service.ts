import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilesService } from './../files/files.service';
import { PrismaService } from './../prisma/prisma.service';
import { IUserRequest } from './../types/user.d';
import { CreateImageDto } from './dto/create-image.dto';
import { DeleteImageDto } from './dto/delete-image.dto';
import { GetImagesDto } from './dto/get-images.dto';

@Injectable()
export class ImagesService {
  constructor(
    private readonly prisma: PrismaService,
    private filesService: FilesService
  ) {}

  // получить картинки со скипом
  async getImages(dto: GetImagesDto) {
    const counter = dto.counter;
    console.log(dto);

    try {
      const images = await this.prisma.image.findMany({
        skip: 11 * counter,
        take: 11,
      });
      if (!images.length)
        throw new HttpException(
          'there is no more photos',
          HttpStatus.BAD_REQUEST
        );
      return images;
    } catch (err) {
      throw err;
    }
  }

  // image by id
  async getImageById(id: string, req: IUserRequest) {
    try {
      const image = await this.prisma.image.findFirst({
        where: { id: Number(id) },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar: { select: { link: true } },
            },
          },
          comments: {
            select: {
              id: true,
              text: true,
              createdAt: true,
              user: {
                select: {
                  id: true,
                  name: true,
                  avatar: { select: { link: true } },
                },
              },
            },
          },
          _count: {
            select: {
              likes: true,
            },
          },
        },
      });
      const likedBefore =
        req.user.id !== 0
          ? Boolean(
              await this.prisma.like.findFirst({
                where: {
                  userId: req.user.id,
                  imageId: Number(id),
                },
              })
            )
          : false;

      if (!image) {
        return new HttpException('Image not found', HttpStatus.NOT_FOUND);
      }

      return { ...image, likedBefore };
    } catch (err) {
      throw err;
    }
  }

  async postImage(
    dto: CreateImageDto,
    image: Express.Multer.File,
    req: IUserRequest
  ) {
    console.log(dto);
    console.log(image);
    const { name, description, coordX, coordY } = dto;
    const { id: userId } = req.user;

    if (!name || !description) {
      return new HttpException('Invalid', HttpStatus.BAD_REQUEST);
    }

    try {
      const link = await this.filesService.createFile(image);
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

  async deleteImage(imageId: number, req: IUserRequest) {
    const userId = req.user.id;
    if (!imageId) throw new HttpException('Invalid', HttpStatus.BAD_REQUEST);

    try {
      const image = await this.prisma.image.deleteMany({
        where: {
          id: imageId,
          userId,
        },
      });
      if (image) return 'image deleted successfully';
      else {
        return new HttpException('you cannot delete', HttpStatus.BAD_REQUEST);
      }
    } catch (err) {
      throw err;
    }
  }
}
