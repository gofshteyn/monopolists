const initialState = {
    title: null,
    pathnames: null
};

function breadcrumbsReducer(state = initialState, action) {
    return {
        ...state
    }
}

export default breadcrumbsReducer;