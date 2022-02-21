import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  analyticsUrls: [],
  urlResponse: '',
  userUrls: [],
  modalDelete: false,
};

export const getAnalytics = createAction('GET_ANALYTICS');
export const getAnalyticsSuccess = createAction('GET_ANALYTICS_SUCCESS');
export const setUrl = createAction<object>('SET_URL');
export const setUrlSuccess = createAction('SET_URL_SUCCESS');
export const getUserUrls = createAction('GET_USERS_URLS');
export const getUserUrlsSuccess = createAction('GET_USERS_URLS_SUCCESS');

export const deleteUserUrl = createAction<string>('DELETE_USER_URL');
export const setUserModalDelete = createAction<boolean>(
  'SET_USER_URL_MODAL_DELETE'
);

export default createReducer(INITIAL_STATE, {
  [getAnalyticsSuccess.type]: (state, action) => ({
    ...state,
    analyticsUrls: action.payload,
  }),

  [setUrlSuccess.type]: (state, action) => ({
    ...state,
    urlResponse: action.payload,
  }),

  [getUserUrlsSuccess.type]: (state, action) => ({
    ...state,
    userUrls: action.payload,
  }),

  [setUserModalDelete.type]: (state, action) => ({
    ...state,
    modalDelete: action.payload,
  }),
});
