import { DeleteImageDto } from './dto/delete-image.dto';
import { IUserRequest } from './../types/user.d';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { ImagesService } from './images.service';
import {
  Controller,
  Get,
  Body,
  Post,
  UseGuards,
  Req,
  Delete,
} from '@nestjs/common';
import { GetImagesDto } from './dto/get-images.dto';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get()
  getImages(@Body() dto: GetImagesDto) {
    return this.imagesService.getImages(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  postImage(@Body() dto: CreateImageDto, @Req() req: IUserRequest) {
    return this.imagesService.postImage(dto, req);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteImage(@Body() dto: DeleteImageDto, @Req() req: IUserRequest) {
    return this.imagesService.deleteImage(dto,req)
  }
}
