const DECREMENT_PARTS_COUNTER = 'filters/DECREMENT_PARTS_COUNTER';
const INCREMENT_PARTS_COUNTER = 'filters/INCREMENT_PARTS_COUNTER';

export const decrementPartsCounter = () => ({
    type: DECREMENT_PARTS_COUNTER
});
export const incrementPartsCounter = () => ({
    type: INCREMENT_PARTS_COUNTER
});

const initialState = {
    partsCounter: 0
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case DECREMENT_PARTS_COUNTER:
            return {
                ...state,
                partsCounter: state.partsCounter - 1
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