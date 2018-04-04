const OPEN_MODAL = 'product/OPEN_MODAL';
const CLOSE_MODAL = 'product/CLOSE_MODAL';

export const openModal = partID => ({
    type: OPEN_MODAL,
    partID
});

export const closeModal = () => ({
    type: CLOSE_MODAL
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

        case CLOSE_MODAL:

            return {
                ...initialState
            };

        default:
            return state
    }

}
