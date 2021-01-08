import * as express from 'express';

const successRes = (res: express.Response, message: string) => {
	res.status(200).send({ message: message });
};

const failRes = (res: express.Response, message: string, err: any) => {
	res.status(400).send({ message: message, error: err });
};

export { successRes, failRes };
