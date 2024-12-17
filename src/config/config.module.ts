import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // Permite acceder a ConfigService en toda la aplicación
      envFilePath: '.env', // Ruta al archivo .env
    }),
  ],
})
export class ConfigModule {}
