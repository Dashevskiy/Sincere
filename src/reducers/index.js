let initialState = {
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGGED':
            return {
                isLoggedIn: true
            }

        default:
            return state;
    }
};

export default reducer;