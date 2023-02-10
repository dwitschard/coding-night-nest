import {Controller, Get, Inject, Param, ParseIntPipe} from "@nestjs/common";
import {OrderService} from "../service/order.service";
import {OrderIdPipe} from "../pipes/order-id.pipe";

@Controller('order')
export class OrderController {


    constructor(private orderService: OrderService, @Inject('TEST_INJECTION') private value: string) {
    }

    @Get(":orderId")
    getOrder(@Param("orderId", ParseIntPipe, OrderIdPipe) orderId: string): string {
        return this.orderService.getOrder(this.value)
    }
}
