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

  public async getUserProfile(user: User): Promise<UserAttributes[]> {
    const results: UserAttributes[] = [];
    results.push({
      name: 'Position',
      value: 'Descancer',
    });
    results.push({
      name: 'Skill',
      value: 'Developer',
    });
    results.push({
      name: 'Country',
      value: 'Jamaica Lovers',
    });
    return results;
  }
}
