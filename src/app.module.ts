import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CallsModule } from './calls/calls.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigModule sea accesible en toda la aplicación
      envFilePath: '.env', // Asegúrate de tener el archivo .env en la raíz
    }),
    AuthModule,
    CallsModule,
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
