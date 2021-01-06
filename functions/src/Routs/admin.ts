import * as express from 'express';

const router = express.Router();

router.post('remove-user', (req, res) => {
	res.send('I should remove a user');
});

export const adminRouter = router;