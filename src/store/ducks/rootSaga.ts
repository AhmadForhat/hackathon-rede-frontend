import { all, takeLatest } from 'redux-saga/effects';

import UserTypes from './User/types';
import { requestLogin } from './User/saga';


export default function* rootSaga(): any {
    return yield all([
        takeLatest(UserTypes.LOAD_REQUEST, requestLogin)
    ]);
}