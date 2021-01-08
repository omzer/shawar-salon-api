// importing all needed libs
import * as express from 'express';

// initating the router
const router: express.Router = express.Router();

// middlewares ------------------------------------------------------------

router.post('/book', async (req: express.Request, res: express.Response) => {
    res.send("TODO implement me");
});

// maybe it shoult be router.delete! idk
router.post('/delete', async (req: express.Request, res: express.Response) => {
    res.send("TODO implement me");
});

// side note when using this middleware be extra carfull becase it's shared between admin and customer
// thus before completting aany request make sure you are completing it for which!

export const commonRouter = router;
