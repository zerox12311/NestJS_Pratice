import { IResult } from './IResult';


export class Result implements IResult {

    constructor(success = false) {
        this.Success = success;
    }
    Success: Boolean;
    Message: String;
    Exception: Error;
}