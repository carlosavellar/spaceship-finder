import { User } from '../model/user';

export class AuthService {
  async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '123') {
      return {
        userName,
        email: 'carlos.avellar@gmail.com',
      };
    } else {
      return undefined;
    }
  }
}
