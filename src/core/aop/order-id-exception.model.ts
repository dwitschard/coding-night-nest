import {HttpException} from "@nestjs/common/exceptions/http.exception";

export class OrderIdException extends HttpException{

    constructor(message: string) {
        super(message, 300);
    }
}
