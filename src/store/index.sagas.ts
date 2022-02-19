import { all } from 'redux-saga/effects';
import * as usersSagas from './users/users.sagas';
import * as authSagas from './auth/auth.sagas';
import * as urlSagas from './url/url.sagas';

function* Sagas() {
  yield all([
    usersSagas.watchSagas(),
    authSagas.watchSagas(),
    urlSagas.watchSagas(),
  ]);
}

export default Sagas;
