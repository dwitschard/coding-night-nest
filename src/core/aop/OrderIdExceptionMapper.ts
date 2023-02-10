import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
import {Response} from 'express';
import {OrderIdException} from "./OrderIdException";

@Catch(OrderIdException)
export class OrderIdExceptionMapper implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        console.log(JSON.stringify(exception))

        return response
            .status(415)
            .json(exception)
    }

}
