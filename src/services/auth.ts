import { User } from '../models/user';
export class AuthService {
  public async login(name: string, password: string): Promise<User | undefined> {
    if (name === 'carlos' && password === '123') {
      return {
        name,
        email: 'carlos.avellar@gmail.com',
      };
    } else {
      return undefined;
    }
  }
}
