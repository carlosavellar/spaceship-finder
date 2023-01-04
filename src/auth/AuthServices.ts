import { User, UserAttributes } from '../models/user';

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '123') {
      return {
        userName,
        email: 'carlos.avellar@gmail.com',
      };
    } else {
      throw new Error('Error motha fucka ');
    }
  }

  public async getUserProfile(): Promise<UserAttributes[]> {
    const result: UserAttributes[] = [];
    result.push({
      name: 'Profession',
      value: 'Blacksmith',
    });
    result.push({
      name: 'Age',
      value: '34',
    });
    result.push({
      name: 'City',
      value: 'Abudabi',
    });
    return result;
  }
}
