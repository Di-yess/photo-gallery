import { PrismaService } from './../prisma/prisma.service';
import { UsersModule } from './../users/users.module';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService, PrismaService],
  imports: [AuthModule, UsersModule],
})
export class ImagesModule {}
