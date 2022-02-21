import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { URL_ANALYTICS, URL, URL_USER } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType, ResponseGenerator } from 'store/responseTypes';
import { successToast } from 'utils/toasts';

import { AxiosError } from 'axios';
import { catchAxiosErrors } from 'utils/catchAxiosErrors';
import {
  deleteUserUrl,
  getAnalytics,
  getAnalyticsSuccess,
  getUserUrls,
  getUserUrlsSuccess,
  setUrl,
  setUrlSuccess,
  setUserModalDelete,
} from './url.ducks';

export function* getListAnalytics() {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(URL_ANALYTICS);

    yield put({ type: getAnalyticsSuccess.type, payload: response.data });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });
    const err = error as AxiosError;
    catchAxiosErrors(err, 'Erro ao carregar Analytics!');
  }
}

export function* createShortUrl({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.post(URL, payload);
    yield put({ type: setUrlSuccess.type, payload: response.data.url });
    yield put({ type: stopLoading.type });
    successToast('Url gerada com sucesso!');
  } catch (error) {
    yield put({ type: stopLoading.type });
    const err = error as AxiosError;
    catchAxiosErrors(err, 'Erro ao criar url!');
  }
}

export function* getListUserUrls() {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(URL_USER);
    yield put({ type: getUserUrlsSuccess.type, payload: response.data });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });
    const err = error as AxiosError;
    catchAxiosErrors(err, 'Erro ao carregar urls do usuário!');
  }
}

export function* destroyUser({ payload }: ActionType) {
  yield put({ type: startLoading.type });
  try {
    yield api.delete(`${URL}/${payload}`);
    successToast('URL deletada com sucesso!');
    yield put({
      type: getUserUrls.type,
    });
    yield put({
      type: setUserModalDelete.type,
      payload: false,
    });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });
    const err = error as AxiosError;
    catchAxiosErrors(err, 'Erro ao deletar url!');
  }
}

export function* watchSagas() {
  yield takeEvery(getAnalytics.type, getListAnalytics);
  yield takeLatest(setUrl.type, createShortUrl);
  yield takeLatest(getUserUrls.type, getListUserUrls);
  yield takeLatest(deleteUserUrl.type, destroyUser);
}
