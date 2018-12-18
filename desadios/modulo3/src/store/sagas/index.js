import { all, takeLatest } from 'redux-saga/effects';

import { Types as userTypes } from '../ducks/users';
import { addUser, removeUser } from './users';

export default function* rootSaga() {
  yield all([takeLatest(userTypes.ADD_REQUEST, addUser)]);
  yield all([takeLatest(userTypes.REMOVE_REQUEST, removeUser)]);
}
