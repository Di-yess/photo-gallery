import { JwtAuthId } from './../auth/jwt-id.guard';
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
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
} from '@nestjs/common';
import { GetImagesDto } from './dto/get-images.dto';
import { CreateImageDto } from './dto/create-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post('/all')
  getImages(@Body() dto: GetImagesDto) {
    return this.imagesService.getImages(dto);
  }

  @UseGuards(JwtAuthId)
  @Get(':id')
  getImageById(@Param('id') id: string, @Req() req: IUserRequest) {
    return this.imagesService.getImageById(id, req);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  postImage(
    @Body() dto: CreateImageDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 1 }),
        ],
      })
    )
    image: Express.Multer.File,
    @Req() req: IUserRequest
  ) {
    return this.imagesService.postImage(dto, image, req);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteImage(@Param('id') id: string, @Req() req: IUserRequest) {
    return this.imagesService.deleteImage(Number(id), req);
  }
}
