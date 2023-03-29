import { LikeImageDto } from './dto/like-image.dto';
import { IUserRequest } from './../types/user.d';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  // like image
  async likeImage(dto: LikeImageDto, req: IUserRequest) {
    const { imageId, liked } = dto;
    const userId = req.user.id;

    if (!userId) {
      return new HttpException(
        'You cannot like an image',
        HttpStatus.FORBIDDEN
      );
    }
    try {
      const checkLike = await this.prisma.like.findFirst({
        where: {
          imageId,
          userId,
        },
      });

      if (liked && !checkLike) {
        const newLike = await this.prisma.like.create({
          data: {
            imageId,
            userId,
          },
        });
        return newLike;
      } else if (!liked && checkLike) {
        const deletedLike = await this.prisma.like.deleteMany({
          where: {
            imageId,
            userId,
          },
        });
        return deletedLike;
      }
    } catch (err) {
      throw err;
    }
  }
}
