import {Module} from "@nestjs/common";
import {OrderController} from "./controller/orderController";
import {OrderService} from "./service/OrderService";


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
