import { User } from './../model/Model';

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '1234') {
      return {
        userName,
        email: 'carlos.avellar@gmail.com',
      };
    } else {
      return undefined;
    }
  }
}
