import { User } from '../models/user';

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '123') {
      return {
        userName,
        email: 'jose.carlos@avenuecode.com',
      };
    }
  }
}
