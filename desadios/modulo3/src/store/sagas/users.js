import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';
import { Creators as ToastActions } from '../ducks/toast';

export function* addUser({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload.data.userInput}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      const message = 'Este usuário já foi adicionado em sua lista!';

      yield put(UsersActions.addUserFailure(message));
      yield put(ToastActions.warn(message));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        latitude: payload.data.marker.latitude,
        longitude: payload.data.marker.longitude,
      };

      yield put(UsersActions.addUserSuccess(userData));
      yield put(ModalActions.hideModalRequest());
      yield put(ToastActions.success('Usuário adicionado com sucesso!'));
    }
  } catch (error) {
    const message = 'Erro ao adicionar o usuário';

    yield put(UsersActions.addUserFailure(message));
    yield put(ToastActions.error(message));
  }
}

export function* removeUser({ payload }) {
  try {
    const users = yield select(state => state.users.data.filter(user => user.id !== payload.id));
    yield put(UsersActions.removeUserSuccess(users));
    yield put(ToastActions.success('Usuário removido com sucesso!'));
  } catch (error) {
    yield put(ToastActions.error('Erro ao remover o usuário!'));
  }
}
