import { useReducer } from "react";

const useForm = (initialState: {[key: string]: any}) => {
	
	const reducer = (state, { field, value }) => {
		return {
			...state,
			[field]: value
		}
	}

	const [formState, dispatchFormUpdate] = useReducer(reducer, initialState);
	
	
	return [
		formState,
		dispatchFormUpdate,
	];
}

export default useForm;