const REMOVE_FAVPART = 'favourites/REMOVE_FAVPART';

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
        case REMOVE_FAVPART:
            return {
                ...state,
                favParts: state.favParts.filter(favPart => favPart.id !== action.favPartId)
            };
        default:
            return state
    }
}