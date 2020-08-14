import axios from 'axios';
import { Dispatch } from 'react';

import { ReviewsResponse, Shop } from '../reducers/shops/types';

export const FETCH_STORE_REVIEWS__SUCCESS = 'FETCH_STORE_REVIEWS__SUCCESS';

interface GetIceCreamStoreReviewAction {
    type: typeof FETCH_STORE_REVIEWS__SUCCESS;
    payload: ReviewsResponse;
}

export const getIceCreamStoreReview = (shop: Shop) => {
    return (dispatch: Dispatch<GetIceCreamStoreReviewAction>) => {
        axios
            .get(
                `https://us-central1-ice-lord.cloudfunctions.net/getIceCreamStoreReview?businessId=${shop.id}`
            )
            .then((response) => {
                dispatch({
                    type: FETCH_STORE_REVIEWS__SUCCESS,
                    payload: response.data,
                });
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    };
};

export type GetIceCreamStoreReviewActionTypes = GetIceCreamStoreReviewAction;