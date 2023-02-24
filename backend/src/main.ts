import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Running at http://localhost:4000/graphql');
  await app.listen(4000);
}
bootstrap();
