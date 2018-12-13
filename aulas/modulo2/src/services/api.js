import axios from 'axios';
import moment from 'moment';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: 'token d8b236a6d8c1098d8d21b9cffced843f7088581c',
      },
    });
  }

  getRepository = async (repositoryName) => {
    const { data: repository } = await this.api.get(`/repos/${repositoryName}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();
    repository.lastUpdate = moment(repository.updated_at).fromNow();

    return repository;
  };
}

export default new Api();
