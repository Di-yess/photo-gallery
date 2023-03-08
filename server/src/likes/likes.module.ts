import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService, PrismaService],
})
export class LikesModule {}
