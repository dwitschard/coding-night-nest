import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {OrderIdException} from "../../../core/aop/order-id-exception.model";

export class OrderIdPipe implements PipeTransform<number> {
    transform(value: number, metadata: ArgumentMetadata): number {
        if (value >= 100_000 && value <= 1_000_000) {
            return value;
        }
        throw new OrderIdException(`OrderId needs to be 6 figures, ${value}`);
    }

}
