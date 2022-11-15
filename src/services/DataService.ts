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

  public async reserveSpace(spaceId: string): Promise<String | undefined> {
    if (spaceId === '1234') {
      return '5555';
    } else {
      return undefined;
    }
  }
}
