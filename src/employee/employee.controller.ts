import { IUserBasic } from './Interfaces/IUserBasic';
import { Controller, Get, Response, HttpStatus, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { EmployeeServices } from './Services/employee.service';
import { UserBasic } from './Entities/userbasic';
import { UserBasicDTO } from './DTO/UserBasic.DTO';
import { ApiUseTags } from '@nestjs/swagger';

// swagger
@ApiUseTags('employee')
@Controller('api')
export class EmployeeController {


    constructor(
        private readonly employeeServices: EmployeeServices
    ) { }




    @Get('employee')
    public async getEmployee(@Response() res) {

        const result = await this.employeeServices.findAll();

        console.log('aaaaaaaaaaaaaaaaaaaaaaaaa', result);
        if (result["0"].Success) {
            return res.status(HttpStatus.OK).json(result["1"]);
        } else {
            return res.status(HttpStatus.OK).json(result["0"].Exception.message);
        }
    }

    @Get('employee/:id')
    public async getEmployeeByid(@Response() res, @Param() param) {
        const result = await this.employeeServices.findById(param.id);
        if (result["0"].Success) {
            return res.status(HttpStatus.OK).json(result["1"]);
        } else {
            return res.status(HttpStatus.OK).json(result["0"].Exception.message);
        }
    }

    @Get('employeeName/:name')
    public async getEmployeeByName(@Response() res, @Param() param) {
        console.log(param);
        const users = await this.employeeServices.findByName(param.name);
        return res.status(HttpStatus.OK).json(users);
    }

    @Post('employee')
    public async createUser(@Response() res, @Body() createUserDTO: UserBasicDTO) {
        console.log(createUserDTO);
        const result = await this.employeeServices.create(createUserDTO);
        if (result["0"].Success) {
            return res.status(HttpStatus.OK).json(result["1"]);
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json(result["0"].Exception.message);
        }

    }

    @Patch('employee/:id')
    public async updateUser(@Response() res, @Param() param, @Body() body) {


        const result = await this.employeeServices.update(param.id, body);
        if (result["0"].Success) {
            return res.status(HttpStatus.OK).json(result["1"]);
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json(result["0"].Exception.message);
        }
    }

    @Delete('employee/:id')
    public async deleteUser(@Response() res, @Param() param) {

        console.log(param.id);
        const result = await this.employeeServices.delete(param.id);
        console.log(result);
        if (result.Success) {
            return res.status(HttpStatus.OK).json('delete success');
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('error');
        }

    }

}

