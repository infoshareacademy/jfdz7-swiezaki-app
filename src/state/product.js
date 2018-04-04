const OPEN_MODAL = 'product/OPEN_MODAL';

export const openModal = partID => ({
    type: OPEN_MODAL,
    partID
});

const initialState = {
    currentlyOpenedModal: null
};

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case OPEN_MODAL:

            return {
                currentlyOpenedModal: action.partID
            };

        default:
            return state
    }

}
