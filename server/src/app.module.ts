import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { LikesModule } from './likes/likes.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    ImagesModule,
    LikesModule,
  ],
})
export class AppModule {}
