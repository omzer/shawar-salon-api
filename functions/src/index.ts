//import libraries
import * as functions from 'firebase-functions';
import * as express from 'express';
import { adminRouter } from './Routs/admin';

//initialize express server
const app = express();

// this line allows express to understand the comming requests as json objects
app.use(express.json());

// adding middleware to the express app
app.use('/admin', adminRouter);

//define google cloud function name
export const webApi = functions.https.onRequest(app);
