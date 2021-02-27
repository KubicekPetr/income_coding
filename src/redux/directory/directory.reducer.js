/* all states are somehow stored in local storage
 and only cart state shloud be,,
 this has to be fix or the storage has to 
 be cleared to invovle changes in shop data state 
 - this is not true since I stoped using redux persists for now */

const INITIAL_STATE ={
    sections: [
        {
            id: 1,
            title: 'T-shirts',
            linkUrl: 'shop/t-shirts',
        },
        {
            id: 2,
            title: 'Hoodies',
            linkUrl: 'shop/hoodies'
        },
        {
            id: 3,
            title: 'Boots',
            linkUrl: 'shop/boots'
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