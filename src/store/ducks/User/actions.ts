import Types from './types';

export const loadRequest = (payload: any) => ({
  type: Types.LOAD_REQUEST,
  payload,
});

export const loadSuccess = (object: any) => ({
  type: Types.LOAD_SUCCESS,
  payload: object,
});

export const loadFailure = () => ({
  type: Types.LOAD_FAILURE,
});

export const loadDefault = () => ({
  type: Types.LOAD_DEFAULT,
});