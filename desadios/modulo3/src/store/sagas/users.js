import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload.data.userInput}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UsersActions.addUserFailure('Este usuário já foi adicionado em sua lista!'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        avatar: data.avatar_url,
        latitude: payload.data.marker.latitude,
        longitude: payload.data.marker.longitude,
      };

      yield put(ModalActions.hideModalRequest());
      yield delay(200);
      yield put(UsersActions.addUserSuccess(userData));
    }
  } catch (error) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar o usuário'));
  }
}
