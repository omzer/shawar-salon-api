const getExpectedBookingTime = async (db: FirebaseFirestore.Firestore, tenantID: string, customerDocument: string) => {
	const lastBookedCustomer = await db
		.collection(tenantID)
		.doc(customerDocument)
		.collection('turns')
		.orderBy('bookedTime', 'desc')
		.limit(1)
		.get();

	let lastExpectedTime: Date = new Date();
	lastBookedCustomer.forEach((doc) => {
		const { bookedTime } = doc.data();
		console.log(bookedTime._seconds);
			lastExpectedTime = bookedTime;
	});

	return lastExpectedTime;
};

export { getExpectedBookingTime };
