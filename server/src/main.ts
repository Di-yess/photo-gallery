import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['content-type', 'Authorization'],
  });

  //documentation
  const config = new DocumentBuilder()
    .setTitle('nest')
    .setDescription('nest description')
    .setVersion('1.0.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}

start();
