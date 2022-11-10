import { Profile } from '../components/Profile';
import { User, UserAttributes } from '../model/user';

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

  async getUserPrtofile(user: User): Promise<UserAttributes[]> {
    let result: UserAttributes[] = [];
    if (result) {
      result.push(
        {
          Name: 'Description',
          Value: 'Dev user',
        },
        {
          Name: 'job',
          Value: 'Engineer',
        },
        {
          Name: 'agro',
          Value: 'Best user ever',
        }
      );
    }
    return result;
  }
}
