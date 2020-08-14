import { FETCH_STORES_SUCCESS } from '../actions/findIceCreamStores';
import { getIceCreamStoreDetails } from '../actions/getIceCreamStoreDetails';
import { getIceCreamStoreReview } from '../actions/getIceCreamStoreReview';

export const shopsDetailsMiddleware = (store: any) => (next: any) => async (action: any) => {
    const result = next(action);

    switch (action.type) {
        case FETCH_STORES_SUCCESS: {
            if (action.payload && action.payload.shops) {
                action.payload.shops.map((shop: any) => {
                    store.dispatch(getIceCreamStoreDetails(shop));
                    store.dispatch(getIceCreamStoreReview(shop));
                    return true;
                });
            }
            break;
        }

        default:
            break;
    }

    return result;
};
