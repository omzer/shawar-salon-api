import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const ShopStatus = functions.https.onRequest(async (request, response) => {
    const data = await admin.firestore().doc('ShopInfo/Info').get();
    response.send({ "data": data.data });
});
