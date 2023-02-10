import {Controller, Get, Param, Version} from '@nestjs/common';
import {AppService} from './app.service';

@Controller({host: 'localhost', version: '1'})
export class AppController {

    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

