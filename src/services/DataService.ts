import { Space } from './../model/user';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: 'Paris',
      name: 'Mortigart',
      spaceId: '092',
    });

    result.push({
      location: 'São Paulo',
      name: 'Monic',
      spaceId: '0ww',
    });

    result.push({
      location: 'Argentina',
      name: 'Lohan',
      spaceId: '233',
    });
    return result;
  }
}
