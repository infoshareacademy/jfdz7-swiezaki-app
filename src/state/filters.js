const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';

export const toggleFilter = ({ target: { name, value}}) => ({
    type: TOGGLE_FILTER,
    name,
    value
});

export const userInputFilter = ({ target: { value }}) => ({
    type: USER_INPUT_FILTER,
    value
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
                [action.name]: action.value
            };
        case USER_INPUT_FILTER:
            return {
                ...initialState,
                userInput: action.value
            };
        default:
            return state
    }
}