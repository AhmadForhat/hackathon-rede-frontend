import { combineReducers } from 'redux';

import User from './User';

const appReducer = combineReducers({
    User
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;