// importing all needed libs
import * as express from 'express';
import * as admin from 'firebase-admin';

import { booked, badRequest, customerDocument } from './messages';
import { bookingResponse, failResponse } from '../utilities/responces';
import { getExpectedBookingTime } from '../utilities/calculations';

//initialize firebase inorder to access its services
admin.initializeApp();

const db = admin.firestore();
// initating the router
const router: express.Router = express.Router();

// middlewares ------------------------------------------------------------

router.post('/book', async (req: express.Request, res: express.Response) => {
	try {
		const { tenantID, ...customerData } = req.body;

        const expectedTime: Date = await getExpectedBookingTime(db, tenantID, customerDocument);
        customerData.bookedTime = expectedTime;
		await db.collection(tenantID).doc(customerDocument).collection('turns').doc().set(customerData);

        bookingResponse(res, { message: booked, bookedTime: expectedTime });
        
	} catch (err) {
		failResponse(res, badRequest, err);
	}
});

router.delete('/delete', async (req: express.Request, res: express.Response) => {
	res.send('TODO implement me');
});

// side note when using this middleware be extra carfull becase it's shared between admin and customer
// thus before completting aany request make sure you are completing it for which!

export const commonRouter = router;
