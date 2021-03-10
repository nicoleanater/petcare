import moment from 'moment';
import { MutableRefObject } from "react";
import { IRefFloatingLabel } from "../components/FloatingLabelInput/FloatingLabelInput";

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

export const validateCelular = (inputRef: MutableRefObject<IRefFloatingLabel>) => {
	return inputRef.current.isValid();
}

export const validateDate = (inputRef: MutableRefObject<IRefFloatingLabel>) => {
	const rawValue = inputRef.current.getRawValue();
	const dateValid = inputRef.current.isValid();
	const dateInThePast = moment(rawValue).isBefore();
	return dateValid && dateInThePast;
}

export const validateDateFuture = (inputRef: MutableRefObject<IRefFloatingLabel>) => {
	const rawValue = inputRef.current.getRawValue();
	const dateValid = inputRef.current.isValid();
	const dateInTheFuture = moment(rawValue).isAfter();
	return dateValid && dateInTheFuture;
}

export const validateDateInterval = (inputRefInicio: MutableRefObject<IRefFloatingLabel>, inputRefFim: MutableRefObject<IRefFloatingLabel>) => {
	const rawValueInicio = inputRefInicio.current.getRawValue();
	const rawValueFim = inputRefFim.current.getRawValue();
	const intervalValid = moment(rawValueInicio).isSameOrBefore(rawValueFim);
	return intervalValid;
}

export const validateCEP = (inputRef: MutableRefObject<IRefFloatingLabel>) => {
	return inputRef.current.isValid();
}
