import { User } from './../model/Model';

export class AuthService {
  public async login(userName: string, email: string): Promise<User | undefined> {
    if (userName === 'carlos' && email === 'carlos.avellar@gmail.com') {
      return {
        userName,
        email,
      };
    } else {
      return undefined;
    }
  }
}
