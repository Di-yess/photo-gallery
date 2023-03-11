import { IUserRequest } from './../types/user.d';
import { LikeImageDto } from './dto/like-image.dto';
import { JwtAuthId } from './../auth/jwt-id.guard';
import { LikesService } from './likes.service';
import { Controller, Post, UseGuards, Body, Req } from '@nestjs/common';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @UseGuards(JwtAuthId)
  @Post()
  likeImage(@Body() dto: LikeImageDto, @Req() req: IUserRequest) {
    return this.likesService.likeImage(dto, req);
  }
}
