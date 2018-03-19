const FETCH__BEGIN = 'parts/FETCH__BEGIN';
const FETCH__SUCCESS = 'parts/FETCH__SUCCESS';
const FETCH__FAIL = 'parts/FETCH__FAIL';

export const fetchBegin = () => ({
    type: FETCH__BEGIN
});

export const fetchSuccess = data => ({
    type: FETCH__SUCCESS,
    data
});

export const fetchFail = error => ({
    type: FETCH__FAIL,
    error
});

const initialState = {
    data: null,
    fetching: false,
    error: null
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH__BEGIN:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case FETCH__SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.data
            };
        case FETCH__FAIL:
            return {
                fetching: false,
                error: action.error
            };
        default:
            return state
    }
}