import axios from 'axios';
export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS';

export const findIceCreamStores = () => {
    return (dispatch) => {
        axios
            .get('https://us-central1-ice-lord.cloudfunctions.net/findIceCreamStores', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                crossdomain: true,
            })
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
