import { FETCH_STORES_SUCCESS, FindStoresActionTypes } from '../../actions/findIceCreamStores';
import {
    FETCH_STORE_DETAILS_SUCCESS,
    GetIceCreamStoreDetailsActionTypes,
} from '../../actions/getIceCreamStoreDetails';
import {
    FETCH_STORE_REVIEWS__SUCCESS,
    GetIceCreamStoreReviewActionTypes,
} from '../../actions/getIceCreamStoreReview';
import { ShopsState } from './types';

const initState: ShopsState = [];

type ShopsActionTypes =
    | FindStoresActionTypes
    | GetIceCreamStoreDetailsActionTypes
    | GetIceCreamStoreReviewActionTypes;

const shopsReducer = (state = initState, action: ShopsActionTypes): ShopsState => {
    if (action.type === FETCH_STORES_SUCCESS) {
        if (action.payload && action.payload.shops) {
            return [...action.payload.shops];
        }
    }

    switch (action.type) {
        case FETCH_STORES_SUCCESS: {
            if (action.payload && action.payload.shops) {
                return [...action.payload.shops];
            }
            break;
        }
        case FETCH_STORE_DETAILS_SUCCESS: {
            const newState = [...state];
            return newState.map((shop) => {
                if (action.payload.id === shop.id) {
                    return { ...shop, ...action.payload };
                }

                return shop;
            });
        }
        case FETCH_STORE_REVIEWS__SUCCESS: {
            const newState = [...state];
            return newState.map((shop) => {
                if (action.payload.businessId === shop.id) {
                    return { ...shop, reviews: action.payload.reviews };
                }

                return shop;
            });
        }
        default:
            break;
    }

    return state;
};

export default shopsReducer;
