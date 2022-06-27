import types from '../actions/types';

export const initialState = {
    allCollections: [],
    currentCollection: null,
    currentCollectionListings: [],
    basket: [],
    basketTotal: 0,
    loadingDone: false,
};

const reducer = (state, action) => {

    switch(action.type){
        
        case types.FETCH_ALL:
            let allItems = [];
            for(let res of action.payload){
                if(res.status === 200){
                    allItems = allItems.concat(res.data);
                }
            }
            return {
                ...state,
                loadingDone: true,
                allCollections: allItems
            };
        case types.FETCH_SINGLE:
            return {
                ...state,
                currentCollection: action.payload
            };
        case types.FETCH_LISTINGS:
            return {
                ...state,
                currentCollectionListings: action.payload
            };
        case types.FETCH_ITEM_DETAILS:
            let newListings = [];
            for(let i=0;i<action.payload.length;i++){
                if(typeof action.payload[i].data === 'undefined' || typeof action.payload[i].data.Title === 'undefined'){
                    newListings.push({...state.currentCollectionListings[i], Title: "#" + "NaN"});
                }
                else{
                    newListings.push({...state.currentCollectionListings[i], 
                        Title: "#" + action.payload[i].data.Title.split("#")[1],});                                        
                }
            }
            return {
                ...state,
                currentCollectionListings: newListings
            };
        case types.ADD_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload],
                basketTotal: Math.round((state.basketTotal + action.payload.price)*1e2)/1e2
            };
        case types.UPDATE_BASKET:
            //index of the item to be removed is fetched through action.payload
            let newArr = [...state.basket];
            newArr.splice(action.payload,1);
            return {
                ...state,
                basket: newArr,
                basketTotal: Math.round((state.basketTotal - state.basket[action.payload].price)*1e2)/1e2
            };
        case types.LOADING_DONE:
            return {
                ...state,
                loadingDone: action.payload
            };
        default:
            return {...state};
    }
}

export default reducer;