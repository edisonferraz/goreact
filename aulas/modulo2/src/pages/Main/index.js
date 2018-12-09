import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

import { localStorageSetRepositories, localStorageGetRepositories } from '../../utils';

class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
    loading: false,
    repositoryLoading: null,
  };

  componentDidMount() {
    const localStorageRepositories = localStorageGetRepositories('goreact-repositories');

    if (localStorageRepositories) {
      this.setState({ repositories: localStorageRepositories });
    }
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;
    this.setState({ loading: true });

    try {
      const repository = await api.getRepository(repositoryInput);

      this.setState(
        {
          repositoryInput: '',
          repositories: [...repositories, repository],
          repositoryError: false,
        },
        () => {
          // eslint-disable-next-line react/destructuring-assignment
          localStorageSetRepositories(this.state.repositories);
        },
      );
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemoveRepository = (repository) => {
    const { repositories } = this.state;
    const repos = repositories.filter(repo => repo.id !== repository.id);

    this.setState({ repositories: [...repos] }, () => {
      // eslint-disable-next-line react/destructuring-assignment
      localStorageSetRepositories(this.state.repositories);
    });
  };

  handleUpdateRepository = async (repository) => {
    const { repositories } = this.state;
    this.setState({ repositoryLoading: repository.id });

    try {
      const repositoryUpdated = await api.getRepository(repository.full_name);
      const repositoriesUpdated = repositories.map(
        r => (r.id === repositoryUpdated.id ? { ...r, ...repositoryUpdated } : r),
      );

      this.setState(
        {
          repositories: repositoriesUpdated,
          repositoryError: false,
        },
        () => {
          // eslint-disable-next-line react/destructuring-assignment
          localStorageSetRepositories(this.state.repositories);
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ repositoryLoading: null });
    }
  };

  render() {
    const {
      repositoryInput,
      repositories,
      repositoryError,
      loading,
      repositoryLoading,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        <CompareList
          repositories={repositories}
          handleRemoveRepository={this.handleRemoveRepository}
          handleUpdateRepository={this.handleUpdateRepository}
          repositoryLoading={repositoryLoading}
        />
      </Container>
    );
  }
}

export default Main;
