import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  analyticsUrls: [],
  urlResponse: '',
  userUrls: [],
};

export const getAnalytics = createAction('GET_ANALYTICS');
export const getAnalyticsSuccess = createAction('GET_ANALYTICS_SUCCESS');

export default createReducer(INITIAL_STATE, {
  [getAnalyticsSuccess.type]: (state, action) => ({
    ...state,
    analyticsUrls: action.payload,
  }),
});
