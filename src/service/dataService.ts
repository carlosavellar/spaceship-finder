import { Space } from '../models/space';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      name: 'Retiliano Space',
      location: 'Sistema Límbico',
      spaceId: '16161',
    });
    result.push({
      name: 'Hells Building',
      location: 'Paris do Inferno',
      spaceId: '56576',
    });
    result.push({
      name: 'Curso Matinal',
      location: 'Iraque do Sul',
      spaceId: '666',
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<String | undefined> {
    if (spaceId === '123') {
      return '555';
    } else {
      return undefined;
    }
  }
}
