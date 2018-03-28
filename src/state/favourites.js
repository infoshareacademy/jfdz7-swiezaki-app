const REMOVE_FAVPART = 'favourites/REMOVE_FAVPART';
const ADD_FAVPART = 'favourites/ADD_FAVPART';

export const addFavPart = currentPart => ({
    type: ADD_FAVPART,
    currentPart
});

export const removeFavPart = favPartId => ({
    type: REMOVE_FAVPART,
    favPartId
});

const initialState = {
    favParts: JSON.parse((
        localStorage.getItem('carPartsBrowserFavParts') || '[]'
    ))
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case ADD_FAVPART:

            let currentFavParts = state.favParts;

            currentFavParts = currentFavParts.filter(part => {
                return part.id !== action.currentPart.id
            });

            const updatedFavParts = currentFavParts.concat(action.currentPart);

            return {
                favParts: updatedFavParts
            };

        case REMOVE_FAVPART:

            return {
                ...state,
                favParts: state.favParts.filter(favPart => favPart.id !== action.favPartId)
            };

        default:
            return state
    }
}