import { IUserRequest } from './../types/user.d';
import { PostCommentDto } from './dto/PostCommentDto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  // create new comment
  async postComment(dto: PostCommentDto, req: IUserRequest) {
    const { imageId, text } = dto;
    const { id: userId } = req.user;

    if (!imageId || !text.trim()) {
      console.log(imageId, text);
      return new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    try {
      const newComment = await this.prisma.comment.create({
        data: {
          userId,
          imageId,
          text,
        },
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
      });
      
      return newComment;
    } catch (err) {
      throw err;
    }
  }
}
