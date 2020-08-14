import axios from 'axios';
import { Dispatch } from 'react';

import { ShopDetails, Shop } from '../reducers/shops/types';

export const FETCH_STORE_DETAILS_SUCCESS = 'FETCH_STORE_DETAILS_SUCCESS';

interface GetIceCreamStoreDetailsAction {
    type: typeof FETCH_STORE_DETAILS_SUCCESS;
    payload: ShopDetails;
}

export const getIceCreamStoreDetails = (shop: Shop) => {
    return (dispatch: Dispatch<GetIceCreamStoreDetailsAction>) => {
        axios
            .get(
                `https://us-central1-ice-lord.cloudfunctions.net/getIceCreamStoreDetail?businessId=${shop.id}`
            )
            .then((response) => {
                dispatch({
                    type: FETCH_STORE_DETAILS_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    };
};

export type GetIceCreamStoreDetailsActionTypes = GetIceCreamStoreDetailsAction;