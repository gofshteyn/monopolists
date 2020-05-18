const initialState = {
    id: null,
    registrationDate: null,
    displayName: null,
    isBlocked: null,
    isAuthorized: false
};

function userReducer(state = initialState, action) {
    return {
        ...state
    };
}

export default userReducer;