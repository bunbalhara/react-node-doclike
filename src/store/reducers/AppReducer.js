const initialState = {
    locale: {
        code: 'fr',
        name: 'French'
    },
    country: 'france',
    ipAddress: ''
};

const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default appReducer;
