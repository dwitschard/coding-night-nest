import {INestApplication} from "@nestjs/common";
import {Test, TestingModule} from "@nestjs/testing";
import * as request from "supertest";
import {OrderModule} from "../dist/features/order/order.module";
import {CoreModule} from "../dist/core/core.module";

describe('OrderModule (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [CoreModule, OrderModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/order/123400')
            .expect(200)
            .expect('Order 888888');
    });
});
