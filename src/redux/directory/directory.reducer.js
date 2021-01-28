const INITIAL_STATE ={
    sections: [
        {
            id: 1,
            title: 'T-shirts',
            linkUrl: 'tshirts',
        },
        {
            id: 2,
            title: 'Hoodies',
            linkUrl: 'hoodies'
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;