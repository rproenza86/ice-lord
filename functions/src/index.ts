import * as functions from 'firebase-functions';
import { YelpBusinesses } from './types/yelp';

const yelp = require('yelp-fusion');
const client = yelp.client('key');

export const findIceCreamStores = functions.https.onRequest((request, response) => {
    return client
        .search({
            term: 'ice cream shops',
            location: 'Alpharetta, GA',
            sort_by: 'rating',
            limit: 4,
        })
        .then((data: any) => {
            response.send(data.jsonBody as YelpBusinesses);
        })
        .catch((e: Error) => {
            functions.logger.error('Error getting data!', e, { structuredData: true });
            response.send(e);
        });
});

export const getIceCreamStoreDetail = functions.https.onRequest((request, response) => {
    const businessId = 'v21jReWx5dd5KuQ0QS6Dog';

    return client
        .business(businessId)
        .then((data: any) => {
            response.send(data.jsonBody as YelpBusinesses);
        })
        .catch((e: Error) => {
            functions.logger.error('Error getting data!', e, { structuredData: true });
            response.send(e);
        });
});
