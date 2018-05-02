import { UserBasic } from './../Entities/UserBasic';
import { IResult } from './../../Public_Shared/Result/IResult';
import { UserExtension } from './../Entities/UserExtension';
import { Inject, Injectable } from '@nestjs/common';
// import { Users } from './users.entity';
// import { IUsers, IUsersService } from './interfaces/index';

import { InjectRepository, } from '@nestjs/typeorm';
// import { InjectRepository } from "typeorm-typedi-extensions";
import { Repository, getConnection, getRepository, Not, IsNull } from 'typeorm';
import { IEmployeeServices } from '../Interfaces/IEmployee.service';
import { IUserBasic } from '../Interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { UserBasicSchema } from '../MongoSchema/UserBasicSchema';
import { Model } from 'mongoose';
import * as moment from 'moment';
import { Result } from '../../Public_Shared/Result/Result';


@Injectable()
export class EmployeeServices implements IEmployeeServices {

    constructor(
        @InjectRepository(UserBasic)
        private readonly userBasicRepository: Repository<UserBasic>,
        // private connection: getConnection
        @InjectRepository(UserExtension)
        private readonly userExtensionRepository: Repository<UserExtension>,
        @InjectModel(UserBasicSchema) private readonly userBasicModel: Model<IUserBasic>
    ) { }

    public async findAll(): Promise<[IResult, Array<UserBasic>]> {
        let result = new Result();
        // public findAll() {
        console.log('call');
        // var a:UserBasic;
        // a.userextensions
        let rtnVal: UserBasic[] = null;

        try {
            rtnVal = await this.userBasicRepository.find({
                K_Delete: IsNull()
            })
            result.Success = true;
        } catch (ex) {
            result.Exception = ex;
        }

        return [result, rtnVal];



        // return await this.userBasicRepository.find({ relations: ['userextensions'] })

        // return await this.userBasicRepository
        //     .createQueryBuilder('tet')
        //     // .leftJoinAndMapMany("tet.userextensions")
        //     .leftJoinAndSelect('tet.userextensions', 'userextensions')
        //     .getMany()
        // return "123";
    }


    public async findById(ID: number): Promise<[IResult, UserBasic]> {
        let result = new Result();

        let rtnVal: UserBasic[] = null;

        try {
            rtnVal = await this.userBasicRepository.findByIds([ID], {
                relations: ['userextensions'],
                where: {
                    K_Delete: IsNull(),
                },
                take: 1
            });
            if (rtnVal.length == 0) {
                throw Error('not found');
            }
            result.Success = true;
        } catch (ex) {
            result.Exception = ex;
        }

        return [result, rtnVal[0]];



    }

    public async findByName(name: string): Promise<UserBasic> {
        return await this.userBasicRepository.findOne({
            relations: ['userextensions'],
            where: {
                Name: name,
                K_Delete: IsNull()
            }
        });
    }

    public async create(users: IUserBasic): Promise<[IResult, UserBasic]> {
        let result = new Result();

        // this.connection = await createConnection();

        // console.log();
        // const createdCat = new this.userBasicModel(users);
        // return await createdCat.save();


        // const test = getRepository(UserBasic);
        // const testbody = null;
        if (users.Birthday != null)
            users.Birthday = await moment(users.Birthday).format('YYYY-MM-DD');
        await users.userextensions.forEach(obj => {
            if (obj.Date_Start)
                obj.Date_Start = moment(obj.Date_Start).format('YYYY-MM-DD');
            if (obj.Date_Leave)
                obj.Date_Leave = moment(obj.Date_Leave).format('YYYY-MM-DD');

        })


        let rtnVal: UserBasic = null;
        try {
            const newUsers = this.userBasicRepository.create(users);
            rtnVal = await this.userBasicRepository.save(newUsers);
            result.Success = true;

        } catch (ex) {
            result.Exception = ex;
        }

        return [result, rtnVal];

    }

    public async update(ID: number, newValue: IUserBasic): Promise<[IResult, UserBasic]> {
        let result = new Result();
        if (ID != newValue.id) {
            result.Exception.message = "id not match";
            return [result, null];
        }


        let user = await this.userBasicRepository.findOne(
            {
                relations: ['userextensions'],
                where: {
                    id: ID
                }
            });

        if (!user.id) {
            throw Error('not found');
        }



        // let rtnVal: UserBasic = null;
        // try {
        //     const newUsers = this.userBasicRepository.create(users);
        //     rtnVal = await this.userBasicRepository.save(newUsers);
        //     result.Success = true;

        // } catch (ex) {
        //     result.Exception = ex;
        // }

        // return [result, rtnVal];

        // let rtnVal: UserBasic = null;
        // try {

        // } catch (ex: Error) {

        // }

        let rtnVal: UserBasic = null;
        try {
            await this.userBasicRepository.save(newValue);
            rtnVal = await this.userBasicRepository.findOne(
                {
                    relations: ['userextensions'],
                    where: {
                        id: ID
                    }
                });
            result.Success = true;
        } catch (ex) {
            result.Exception = ex;
        }

        return [result, rtnVal]
    }



    public async delete(ID: number): Promise<IResult> {
        let result = new Result();


        let rtnVal = await this.userBasicRepository.findOne(
            {
                relations: ['userextensions'],
                where: {
                    id: ID
                }
            });

        rtnVal.K_Delete = 1;

        try {
            rtnVal = await this.userBasicRepository.save(rtnVal);
            result.Success = true;
        } catch (ex) {
            result.Exception = ex;
        }

        return result;



        // let rtn = await this.userBasicRepository.delete([ID]);
        // console.log("a", rtn.raw);
        // // let user = await this.userBasicRepository.findByIds([ID]);
        // // console.log(user);
        // if (rtn.raw['affectedRows']) {
        //     result.Success = true;
        //     return result;
        // } else {
        //     return result;
        // }
    }




}