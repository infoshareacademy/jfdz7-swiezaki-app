const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const TOGGLE_SELECT = 'filters/TOGGLE_SELECT';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';

export const toggleFilter = (e, { name, value }) => ({
    type: TOGGLE_FILTER,
    name,
    value
});

export const toggleSelect = ({ target: {name, value}}) => ({
    type: TOGGLE_SELECT,
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
    brand: '',
    userInput: ''
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return {
                ...state,
                [action.name]: action.value,
            };
        case TOGGLE_SELECT:
            return {
                ...state,
                [action.name]: action.value,
             };
        case USER_INPUT_FILTER:
            return {
                ...state,
                userInput: action.value.toLowerCase(),
             };
        default:
            return state
    }
}