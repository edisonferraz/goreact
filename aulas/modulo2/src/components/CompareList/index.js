import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import { BulletList } from 'react-content-loader';
import {
  Container, Repository, BtnRemove, BtnUpdate,
} from './styles';

const Animate = posed.div({
  hidden: {
    opacity: 0,
    scaleY: 0.8,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
  },
  transition: {
    opacity: { ease: 'easeOut', duration: 300 },
    scale: { ease: 'easeOut', duration: 20 },
    default: { ease: 'linear', duration: 500 },
  },
});

const CompareList = ({
  repositories,
  handleRemoveRepository,
  handleUpdateRepository,
  repositoryLoading,
}) => (
  <Container>
    {repositories.map(repository => (
      <Animate
        pose={repositoryLoading === repository.id ? 'hidden' : 'visible'}
        key={repository.id}
      >
        <Repository>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          {repositoryLoading === repository.id ? (
            <ul className="loading">
              <BulletList height={90} width={260} />
              <BulletList height={90} width={260} />
            </ul>
          ) : (
            <ul>
              <li>
                {repository.stargazers_count}
                <small>stars</small>
              </li>
              <li>
                {repository.forks_count}
                <small>forks</small>
              </li>
              <li>
                {repository.open_issues_count}
                <small>issues</small>
              </li>
              <li>
                {repository.lastCommit}
                <small>last commit</small>
              </li>
              <li>
                {repository.lastUpdate}
                <small>last update</small>
              </li>
            </ul>
          )}

          <BtnRemove title="remove" onClick={() => handleRemoveRepository(repository)}>
            Remove
          </BtnRemove>

          <BtnUpdate title="update" onClick={() => handleUpdateRepository(repository)}>
            <i className="fa fa-refresh" />
          </BtnUpdate>
        </Repository>
      </Animate>
    ))}
  </Container>
);

CompareList.defaultProps = {
  repositoryLoading: null,
};

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
  handleRemoveRepository: PropTypes.func.isRequired,
  handleUpdateRepository: PropTypes.func.isRequired,
  repositoryLoading: PropTypes.number,
};

export default CompareList;
