import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { INestApplication } from '@nestjs/common';
import * as cors from 'cors';


//創建express 實例
const instance = express();
//middleware
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  //swagger options
  const options = new DocumentBuilder()
    .setTitle('Users Restful API')
    .setDescription('The users Restful API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  //restful API 文檔
  const document = SwaggerModule.createDocument(app, options);

  //打開http://localhost:3000/api 就會連結到swagger服務。
  SwaggerModule.setup('/swagger', app, document);

  
  await app.listen(3000).then(() => {
    console.log('Server Listen on 3000 Port');
  }).catch((err) => {
    console.log('error', err);
  })
}
bootstrap();
