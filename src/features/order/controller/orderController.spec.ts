import {Test, TestingModule} from '@nestjs/testing';
import {OrderController} from "./orderController";
import {OrderModule} from "../order.module";

describe('OrderController', () => {
    let orderController: OrderController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [OrderModule],
        }).compile();

        orderController = app.get<OrderController>(OrderController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(orderController.getOrder('123456')).toBe('Order 123456');
        });

        it('should return Error"', () => {
            expect(orderController.getOrder('12345')).toBe('Order 123456');
        });
    });
});
