import {Controller, Get, Inject, Param, ParseIntPipe} from "@nestjs/common";
import {OrderIdPipe} from "../pipes/OrderIdPipe";
import {OrderService} from "../service/OrderService";
import {APP_GUARD} from "@nestjs/core";

@Controller('order')
export class OrderController {


    constructor(private orderService: OrderService, @Inject('TEST_INJECTION') private value: string) {
    }

    @Get(":orderId")
    getOrder(@Param("orderId", ParseIntPipe, OrderIdPipe) orderId: string): string {
        return this.orderService.getOrder(this.value)
    }
}
