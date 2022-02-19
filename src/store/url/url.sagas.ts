import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { URL_ANALYTICS } from 'constants/endpoints';
import { startLoading, stopLoading } from 'store/loading/loading.ducks';
import { api } from 'services/api';
import { ActionType, ResponseGenerator } from 'store/responseTypes';
import { errorToast } from 'utils/toasts';

import { getAnalytics, getAnalyticsSuccess } from './url.ducks';

export function* getListAnalytics() {
  yield put({ type: startLoading.type });
  try {
    const response: ResponseGenerator = yield api.get(URL_ANALYTICS);

    yield put({ type: getAnalyticsSuccess.type, payload: response.data });
    yield put({ type: stopLoading.type });
  } catch (error) {
    yield put({ type: stopLoading.type });

    errorToast(`Erro ao carregar Analytics! : ${error}`);
  }
}

export function* watchSagas() {
  yield takeEvery(getAnalytics.type, getListAnalytics);
}
