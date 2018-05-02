import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '************',
      database: 'nestjs',
      entities: [
        __dirname + '/employee/Entities/*{.ts,.js}'
      ],
      // synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/*********'),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}
