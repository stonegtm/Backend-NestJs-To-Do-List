import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get the port from the environment variable
  const configService = app.get(ConfigService);
  console.log(">>>>>",configService.get<number>('SERVER_PORT'));
  const port = configService.get<number>('SERVER_PORT', 3000);

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
