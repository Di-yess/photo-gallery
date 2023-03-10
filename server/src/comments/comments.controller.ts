import { IUserRequest } from './../types/user.d';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { PostCommentDto } from './dto/PostCommentDto';
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  postComment(@Body() dto: PostCommentDto, @Req() req: IUserRequest) {
    return this.commentsService.postComment(dto, req);
  }
}
