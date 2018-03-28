const REMOVE_FAVPART = 'favourites/REMOVE_FAVPART';
const ADD_FAVPART = 'favourites/ADD_FAVPART';

export const addFavPart = partID => ({
    type: ADD_FAVPART,
    partID
});

export const removeFavPart = favPartID => ({
    type: REMOVE_FAVPART,
    favPartID
});

const initialState = {
    favPartsIDs: JSON.parse((
        localStorage.getItem('carPartsBrowserFavParts') || '[]'
    ))
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case ADD_FAVPART:

            let currentFavPartsIDs = state.favPartsIDs;

            currentFavPartsIDs = currentFavPartsIDs.filter(favPartID => {
                return favPartID !== action.partID
            });

            const updatedFavPartsIDs = currentFavPartsIDs.concat(action.partID);

            return {
                favPartsIDs: updatedFavPartsIDs
            };

        case REMOVE_FAVPART:

            return {
                ...state,
                favPartsIDs: state.favPartsIDs.filter(favPartID => favPartID !== action.favPartID)
            };

        default:
            return state
    }
}