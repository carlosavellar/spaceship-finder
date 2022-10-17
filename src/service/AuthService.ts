import { User, UserAttribute } from './../model/User';

export class AuthService {
  public async login(userName: string, password: string): Promise<User | undefined> {
    if (userName === 'carlos' && password === '123') {
      return {
        userName,
        email: 'carlos.avellar@gmail.com',
      };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({
      Name: 'Mafia',
      Value: 'Gambino',
    });
    result.push({
      Name: 'Força',
      Value: 'Maxima',
    });
    result.push({
      Name: 'Filme',
      Value: 'Velozes e Furiosos',
    });
    return result;
  }
}
