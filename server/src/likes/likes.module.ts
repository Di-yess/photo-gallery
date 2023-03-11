import { AuthModule } from './../auth/auth.module';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService, PrismaService],
  imports: [AuthModule],
})
export class LikesModule {}
