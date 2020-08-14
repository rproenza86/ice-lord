import axios from 'axios';
import { Dispatch } from 'react';

import { Shop } from '../reducers/shops/types';

export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS';

interface FindIceCreamStoresAction {
    type: typeof FETCH_STORES_SUCCESS;
    payload: { total: number; shops: Shop[] };
}

export const findIceCreamStores = (
    { sort_by, term, location, limit } = {
        sort_by: 'rating',
        limit: 4,
        term: 'ice cream shops',
        location: 'Alpharetta, GA',
    }
) => {
    return (dispatch: Dispatch<FindIceCreamStoresAction>) => {
        axios
            .get(
                `https://us-central1-ice-lord.cloudfunctions.net/findIceCreamStores?sort_by=${sort_by}&term=${term}&location=${location}&limit=${limit}`
            )
            .then((response) => {
                const { businesses: shops, total } = response.data;

                dispatch({
                    type: FETCH_STORES_SUCCESS,
                    payload: { shops, total },
                });
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    };
};

export type FindStoresActionTypes = FindIceCreamStoresAction;
