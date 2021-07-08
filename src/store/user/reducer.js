import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
};

export const userReducer = createReducer(initialState, (builder) => {});
