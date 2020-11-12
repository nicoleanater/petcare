import React, { useContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers';
import { usuarioReducers, usuarioState } from './usuario';

const [rootReducerCombined, initialStateCombined] = combineReducers({
	usuario: [usuarioReducers, usuarioState],
});

// Application Store
export const StateContext = React.createContext();

export const StoreProvider = ({ children }) => {
	const contextReducersAndState = useReducer(
		rootReducerCombined,
		initialStateCombined
	);

	return (
		<StateContext.Provider
			value={contextReducersAndState}
			children={children}
		/>
	);
};

export const useStore = () => useContext(StateContext);
