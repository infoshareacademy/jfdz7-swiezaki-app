const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';

const initialState = {
    category: 'nowe',
    vehicle: 'osobowe',
    producer: '',
    userInput: '',
    showEmptyMessage: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return {
                ...initialState,
                [action.filterName]: action.filterValue
            };
        case USER_INPUT_FILTER:
            return {
                ...initialState,
                userInput: action.filterValue
            };
        default:
            return state
    }
}