const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';

export const toggleFilter = (filterName, filterValue) => ({
    type: TOGGLE_FILTER,
    filterName,
    filterValue
});

export const userInputFilter = filterValue => ({
    type: USER_INPUT_FILTER,
    filterValue
});

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