'use strict';
import { UserBasic } from "../Entities/UserBasic";
import { IUserBasic } from ".";
import { IResult } from "../../Public_Shared/Result/IResult";
// import { IUsers } from './IUsers';

export interface IEmployeeServices {
    findAll(): Promise<[IResult, Array<UserBasic>]>;
    // findAll();
    findById(ID: number): Promise<[IResult,UserBasic]>;
    findByName(name: string): Promise<UserBasic | null>;
    // findOne(options: Object): Promise<userbasic | null>;
    create(users: IUserBasic): Promise<[IResult, UserBasic]>;
    update(ID: number, newValue: IUserBasic): Promise<[IResult, UserBasic]>;
    delete(ID: number): Promise<IResult>;
}