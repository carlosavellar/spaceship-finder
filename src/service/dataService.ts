import { Space } from '../models/spaces';

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const spaces = [];
    spaces.push({
      spaceId: 'ëhe2',
      name: 'Miguila',
      location: 'Jorranesburgo',
    });
    spaces.push({
      spaceId: '&^23',
      name: 'Mahabarata',
      location: 'Gadhimpour',
    });
    spaces.push({
      spaceId: '4523',
      name: 'Holmes',
      location: 'Gadhimpour',
    });
    return spaces;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === '1234') {
      return '552';
    } else {
      return undefined;
    }
  }
}
