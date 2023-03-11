import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from './../auth/auth.module';
import { PrismaService } from './../prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
