
export const validateEmail = (newEmail?: string): boolean => {
	let isEmailValid = true;

	if (newEmail === undefined || newEmail === null || newEmail === '') {
			isEmailValid = false;
	}

	const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (newEmail !== undefined && reg.test(newEmail) === false) {
			isEmailValid = false;
	}

	return isEmailValid;
}