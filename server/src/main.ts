import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

    app.enableCors({
        origin: [frontendUrl],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        })
    );

    await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
