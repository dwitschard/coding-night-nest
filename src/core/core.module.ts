import {Global, Module} from "@nestjs/common";
import {APP_FILTER, APP_GUARD} from "@nestjs/core";
import {OrderIdExceptionMapper} from "./aop/OrderIdExceptionMapper";

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [
        {provide: APP_FILTER, useClass: OrderIdExceptionMapper},
        {provide: 'TEST_INJECTION', useValue: '888888'},
    ],
    exports: [
        'TEST_INJECTION',
    ]
})
export class CoreModule {

}
