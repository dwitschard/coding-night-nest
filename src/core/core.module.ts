import {Global, Module} from "@nestjs/common";
import {APP_FILTER} from "@nestjs/core";
import {OrderIdExceptionFilter} from "./aop/order-id-exception.filter";

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [
        {provide: APP_FILTER, useClass: OrderIdExceptionFilter},
        {provide: 'TEST_INJECTION', useValue: '888888'},
    ],
    exports: [
        'TEST_INJECTION',
    ]
})
export class CoreModule {

}
