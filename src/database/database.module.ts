import { Module } from '@nestjs/common';
import { pool } from './database';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useValue: pool,
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
