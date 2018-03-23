const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';
const INIT_PARTS_COUNTER = 'filters/INIT_PARTS_COUNTER';
const INCREMENT_PARTS_COUNTER = 'filters/INCREMENT_PARTS_COUNTER';

export const toggleFilter = ({ target: { name, value}}) => ({
    type: TOGGLE_FILTER,
    name,
    value
});

export const userInputFilter = ({ target: { value }}) => ({
    type: USER_INPUT_FILTER,
    value
});

export const initPartsCounter = () => ({
    type: INIT_PARTS_COUNTER
});

export const decrementPartsCounter = () => ({
    type: INCREMENT_PARTS_COUNTER
});

const initialState = {
    category: 'nowe',
    vehicle: 'osobowe',
    brand: '',
    userInput: '',
    showEmptyMessage: true,
    partsCounter: 0
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return {
                ...state,
                [action.name]: action.value,
                showEmptyMessage: true
            };
        case USER_INPUT_FILTER:
            return {
                ...state,
                userInput: action.value.toLowerCase(),
                showEmptyMessage: true
            };
        case INIT_PARTS_COUNTER:
            return {
                ...state,
                partsCounter: 0
            };
        case INCREMENT_PARTS_COUNTER:
            return {
                ...state,
                partsCounter: state.partsCounter + 1
            };
        default:
            return state
    }
}