import knex from '../../../connection/connection'

type Users = {
  id: number;
  UrlPhoto: string;
  name: string;
  occupation: string;
  description: string;
  UrlInstagram: string;
  UrlGithub: string;
  createdAt: string;
};

export default class ListSpeakersService {
  public async execute (): Promise<Users> {
    const speakers = await knex('speakers_epice')
      .from('speakers_epice')
      .select<Users>(
        'id',
        'UrlPhoto',
        'name',
        'occupation',
        'description',
        'UrlInstagram',
        'UrlGithub',
        'created_at'
      )
      .orderBy('id')
    return speakers
  }
}
