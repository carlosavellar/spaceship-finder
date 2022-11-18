import { User, UserAttributes } from '../models/user';

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '123') {
      return {
        userName,
        email: 'carlos.avellar@gmail.com',
      };
    }
  }

  public async getUserAtributes(user: User): Promise<UserAttributes[]> {
    const results: UserAttributes[] = [];
    const attributes = await Auth;
    results.push(...user);
  }
}
