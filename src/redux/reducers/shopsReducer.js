import { FETCH_STORES_SUCCESS } from '../actions/findIceCreamStores';
import { FETCH_STORE_DETAILS_SUCCESS } from '../actions/getIceCreamStoreDetails';

const initState = [];

const shopsReducer = (state = initState, action) => {
    if (action.type === FETCH_STORES_SUCCESS) {
        if (action.payload && action.payload.shops) {
            return [...action.payload.shops];
        }
    }

    switch (action.type) {
        case FETCH_STORES_SUCCESS:
            if (action.payload && action.payload.shops) {
                return [...action.payload.shops];
            }
            break;
        case FETCH_STORE_DETAILS_SUCCESS:
            const newState = [...state];
            return newState.map((shop) => {
                if (action.payload.id === shop.id) {
                    return { ...shop, ...action.payload };
                }

                return shop;
            });

        default:
            break;
    }

    return state;
};

export default shopsReducer;
