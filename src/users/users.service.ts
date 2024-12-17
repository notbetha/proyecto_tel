import { Injectable } from '@nestjs/common';
import { pool } from '../database/database';

@Injectable()
export class UsersService {
  async getUser(userId: string) {
    const [rows]: any = await pool.execute(
      'SELECT * FROM clientsip WHERE id_client = ?',
      [userId],
    );
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
}
