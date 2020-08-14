import axios from 'axios';
export const FETCH_STORE_DETAILS_SUCCESS = 'FETCH_STORE_DETAILS_SUCCESS';

export const getIceCreamStoreDetails = (shop) => {
    return (dispatch) => {
        axios
            .get(
                `https://us-central1-ice-lord.cloudfunctions.net/getIceCreamStoreDetail?businessId=${shop.id}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    crossdomain: true,
                }
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
