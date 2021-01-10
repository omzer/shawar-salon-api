import { Response } from 'express';

const successResponse = (res: Response, message: string) => {
	res.status(200).send({ message: message });
};

const failResponse = (res: Response, message: string, err: any) => {
	res.status(400).send({ message: message, error: err });
};

const bookingResponse = (res: Response, requiredData: { message: string; bookedTime: Date }) => {
	const { message, bookedTime } = requiredData;
	res.status(200).send({ message: message, bookedTime: bookedTime });
};

export { successResponse, failResponse, bookingResponse };
