import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  createSuccess: false,
};

export const createUser = createAction<object>('CREATE_USER');
export const createUserSuccess = createAction<boolean>('CREATE_USER_SUCCESS');

export default createReducer(INITIAL_STATE, {
  [createUserSuccess.type]: (state, action) => ({
    ...state,
    createSuccess: action.payload,
  }),
});
