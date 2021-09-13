import UserTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
    data: {},
    error: false,
    loading: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UserTypes.LOAD_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
                draft.error = false;
            });

        case UserTypes.LOAD_SUCCESS:
            return produce(state, (draft) => {
                const { payload } = action;
                draft.data = payload;
                draft.loading = false;
                draft.error = false;
            });

        case UserTypes.LOAD_FAILURE:
            return produce(state, (draft) => {
                draft.loading = false;
                draft.error = true;
            });

        case UserTypes.LOAD_DEFAULT:
            return produce(state, (draft) => {
                draft = INITIAL_STATE;
            });

        default:
            return state;
    }
};

export default reducer;