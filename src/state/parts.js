const FETCH__BEGIN = 'parts/FETCH__BEGIN';
const FETCH__SUCCESS = 'parts/FETCH__SUCCESS';
const FETCH__FAIL = 'parts/FETCH__FAIL';

const fetchBegin = () => ({
    type: FETCH__BEGIN
});

const fetchSuccess = data => ({
    type: FETCH__SUCCESS,
    data
});

const fetchFail = error => ({
    type: FETCH__FAIL,
    error
})

export const fetchParts = () => dispatch => {
    dispatch(fetchBegin());
    return fetch('https://myawsomeproject-82083.firebaseio.com/stuffs.json')
        .then(response => response.json())
        .then(data => dispatch(fetchSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

const initialState = {
    data: null,
    fetching: false,
    error: null,
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