import * as functions from 'firebase-functions';
import { YelpBusinesses } from './types/yelp';

const yelp = require('yelp-fusion');
const client = yelp.client(functions.config().yelp_fusion_api.key);

const cors = require('cors')({ origin: true });

export const findIceCreamStores = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        const {
            sort_by = 'rating',
            limit = 4,
            term = 'ice cream shops',
            location = 'Alpharetta, GA',
        } = request.query;

        return client
            .search({
                term,
                location,
                sort_by,
                limit,
            })
            .then((data: any) => {
                response.send(data.jsonBody as YelpBusinesses);
            })
            .catch((e: Error) => {
                functions.logger.error('Error getting data!', e, { structuredData: true });
                response.send(e);
            });
    });
});

export const getIceCreamStoreDetail = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        const { businessId } = request.query;

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
});

export const getIceCreamStoreReview = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        const { businessId } = request.query;

        return client
            .reviews(businessId)
            .then((data: any) => {
                response.send({ ...data.jsonBody, businessId });
            })
            .catch((e: Error) => {
                functions.logger.error('Error getting data!', e, { structuredData: true });
                response.send(e);
            });
    });
});
