import { put, takeLatest } from 'redux-saga/effects';
import { USER } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType } from 'store/responseTypes';
import { errorToast, successToast } from 'utils/toasts';
import { normalizeError } from 'utils/normalizeErrors';
import { AxiosError } from 'axios';
import { catchAxiosErrors } from 'utils/catchAxiosErrors';
import { createUser, createUserSuccess } from './users.ducks';

export function* createNewUser({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    yield api.post(USER, payload);
    successToast('Usuário criado com sucesso!');

    yield put({
      type: createUserSuccess.type,
      payload: true,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    const err = error as AxiosError;
    catchAxiosErrors(err, 'Erro ao criar usuário!');
    yield put({ type: stopLoading.type });
  }
}

export function* watchSagas() {
  yield takeLatest(createUser.type, createNewUser);
}
