import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GreetController, GreetControllerV2} from "./greetController";
import {OrderModule} from "./features/order/order.module";
import {CoreModule} from "./core/core.module";

@Module({
  imports: [CoreModule, OrderModule],
  controllers: [AppController, GreetController, GreetControllerV2],
  providers: [
      AppService,
  ],
})
export class AppModule {}
