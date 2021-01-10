// importing all needed libs
import * as express from 'express';
import * as admin from 'firebase-admin';

// requireing the needed custom modules
import { commonRouter } from './common';
import { updated, badRequest } from './messages';
import { successResponse, failResponse } from '../utilities/responces';

const db = admin.firestore();
const router: express.Router = express.Router();

// TODO first step make sure that the reuqest is from the admin
router.post('/open-close', async (req: express.Request, res: express.Response) => {
	try {
		// extracting data
		const { tenantID, newStatus } = req.body;

		// updating the salon status
		await db.collection(tenantID).doc('salon').set({ status: newStatus });

		// sending back the success response
		successResponse(res, updated);
	} catch (err) {
		// sending back the fail response just in case
		failResponse(res, badRequest, err);
	}
});

// common functionalities between admin and customers goes here
router.use(commonRouter);

export const adminRouter = router;
