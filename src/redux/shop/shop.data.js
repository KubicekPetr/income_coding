/* all states are somehow stored in local storage
 and only cart state shloud be,,
 this has to be fix or the storage has to 
 be cleared to invovle changes in shop data state */

const DATA = {
    tshirts: {
        id: 1,
        title: 'T-shirts',
        items: [
            {
                id: 1,
                name: 'T-shirt MZCH',
                price: 25,
            },
            {
                id: 2,
                name: 'T-shirt NUN',
                price: 20,
            },
        ],
    },
    hoodies: {
        id: 2,
        title: 'Hoodies',
        items: [
            {
                id: 3,
                name: 'Hoodie MZCH',
                price: 30,
            },
            {
                id: 4,
                name: 'Hoodie NUN',
                price: 25,
            },
        ],
    },
    boots: {
        id: 3,
        title: 'Boots',
        items: [
            {
                id: 5,
                name: 'Boots MZCH',
                price: 59,
            },
            {
                id: 6,
                name: 'Boots NUN',
                price: 44,
            },
        ],
    },
};

export default DATA;