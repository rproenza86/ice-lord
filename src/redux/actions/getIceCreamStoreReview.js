import axios from 'axios';
export const FETCH_STORE_REVIEWS__SUCCESS = 'FETCH_STORE_REVIEWS__SUCCESS';

export const getIceCreamStoreReview = (shop) => {
    return (dispatch) => {
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
