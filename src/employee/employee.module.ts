import { UserBasicSchema } from './MongoSchema/UserBasicSchema';
import { MongooseModule } from '@nestjs/mongoose';
'use strict';

import { Module } from '@nestjs/common';
// import { DatabaseModule } from './Database/database.module';
// import { EmployeeProviders } from './Providers/employee.providers';
import { EmployeeController } from './employee.controller';
import { EmployeeServices } from './Services/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBasic } from './Entities/UserBasic';
import { UserExtension } from './Entities/UserExtension';


@Module({
  imports: [
    MongooseModule.forFeature([{name:'UserBasic',schema:UserBasicSchema}]),
    TypeOrmModule.forFeature([UserBasic,UserExtension]),
    // DatabaseModule,
  ],
  controllers: [
    EmployeeController
  ],
  providers: [
    EmployeeServices,
    // ...EmployeeProviders
  ]
})
export class EmployeeModule { }
