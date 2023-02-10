import {Module} from "@nestjs/common";
import {OrderController} from "./controller/order.controller";
import {OrderService} from "./service/order.service";


@Module({
    imports: [],
    controllers: [OrderController],
    providers: [
        OrderService,
        //{provide: 'TEST_INJECTION', useValue: '888888'}
    ],
})
export class OrderModule {

}
