import { SagaIterator } from "redux-saga";
import { put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';

export function* requestLogin({ payload }: any): SagaIterator {
    try {
        yield put(loadSuccess(payload))
    } catch (err) {
        alert("Houve ume erro");
        yield put(loadFailure());
    }
}