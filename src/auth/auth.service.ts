import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(login: string, password: string): Promise<any> {
    if (login === 'admin' && password === 'admin') {
      return { message: 'Login successful' };
    }
    return { message: 'Invalid login or password' };
  }
}
