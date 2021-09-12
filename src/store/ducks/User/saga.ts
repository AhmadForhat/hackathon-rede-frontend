import { SagaIterator } from "redux-saga";
import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';


export function* requestLogin({ payload }: any): SagaIterator {
    try {
        console.log('payload')
        console.log(payload)
        yield put(loadSuccess(payload))
    } catch (err) {
        alert("Houve ume erro");
        yield put(loadFailure());
    }
}