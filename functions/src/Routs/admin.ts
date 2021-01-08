// importing all needed libs
import * as express from 'express';
import * as admin from 'firebase-admin';

import { commonRouter } from './common';
import { updated, badRequest } from './messages';
import { successRes, failRes } from './utilities';

//initialize firebase inorder to access its services
admin.initializeApp();

const db = admin.firestore();

const router: express.Router = express.Router();

// TODO first step make sure that the reuqest is from the admin
router.post('/open-close', async (req: express.Request, res: express.Response) => {
	try {
		const { tenantID, newStatus } = req.body;
		await db.collection(tenantID).doc('salon').set({ status: newStatus });
		successRes(res, updated);
	} catch (err) {
		failRes(res, badRequest, err);
	}
});

router.use(commonRouter);

export const adminRouter = router;
