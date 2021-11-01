import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import dotenvFlow = require('dotenv-flow');
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    dotenvFlow.config();

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: true,
    });

    app.use(compression());
    app.use(helmet({ contentSecurityPolicy: false }));
    app.enableCors();

    app.setViewEngine('hbs');

    const server = await app.listen(3000);
}
bootstrap();