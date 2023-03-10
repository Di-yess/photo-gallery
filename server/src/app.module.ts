import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { LikesModule } from './likes/likes.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CommentsModule } from './comments/comments.module';
import * as path from 'path';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      // для того чтобы вытаскивать из билда фотографии
      // и при ребилде доставать сохраненные
      rootPath: path.resolve(__dirname, '..', 'static'),
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    ImagesModule,
    LikesModule,
    FilesModule,
    CommentsModule,
  ],
})
export class AppModule {}
