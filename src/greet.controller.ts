import {Controller, Get, Param} from "@nestjs/common";
import exp from "constants";

@Controller({version: '1'})
export class GreetController {

    @Get("greet/:name")
    getHello2(@Param("name") name: string): string {
        return `Hello ${name}`
    }
}

@Controller({version: '2'})
export class GreetControllerV2 {

    @Get("greet/:name")
    getHello2(@Param("name") name: string): string {
        return `V2: Hello ${name}`
    }
}


