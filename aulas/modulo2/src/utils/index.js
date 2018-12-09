export const localStorageSetRepositories = (value) => {
  window.localStorage.setItem('goreact-repositories', JSON.stringify(value));
};

export const localStorageGetRepositories = () => JSON.parse(window.localStorage.getItem('goreact-repositories'));
