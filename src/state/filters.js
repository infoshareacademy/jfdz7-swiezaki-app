const TOGGLE_FILTER = 'filters/TOGGLE_FILTER';
const TOGGLE_SELECT = 'filters/TOGGLE_SELECT';
const USER_INPUT_FILTER = 'filters/USER_INPUT_FILTER';
const INCREMENT_PARTS_COUNTER = 'filters/INCREMENT_PARTS_COUNTER';

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

export const incrementPartsCounter = () => ({
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
                showEmptyMessage: true,
                partsCounter: 0
            };
        case TOGGLE_SELECT:
            return {
                ...state,
                [action.name]: action.value,
                showEmptyMessage: true,
                partsCounter: 0 // TODO: check why the counter updates before toggle
            };
        case USER_INPUT_FILTER:
            return {
                ...state,
                userInput: action.value.toLowerCase(),
                showEmptyMessage: true,
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