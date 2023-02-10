import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {OrderModule} from "./features/order/order.module";
import {CoreModule} from "./core/core.module";
import {GreetController, GreetControllerV2} from "./greet.controller";

@Module({
  imports: [CoreModule, OrderModule],
  controllers: [AppController, GreetController, GreetControllerV2],
  providers: [
      AppService,
  ],
})
export class AppModule {}
