import React, { useContext, useEffect, useReducer, useState } from 'react';
import combineReducers from 'react-combine-reducers';
import { ActivityIndicator, View } from 'react-native';
import persistState from '../hooks/persistState';
import { usuarioActions, usuarioReducers, usuarioState } from './usuario';

const [rootReducerCombined, initialStateCombined] = combineReducers({
	usuario: [usuarioReducers, usuarioState],
});

// Application Store
export const StateContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
	const contextReducersAndState = useReducer(
		rootReducerCombined,
		initialStateCombined
	);

	const [state, dispatch] = contextReducersAndState;
	const [loading, setLoading] = useState(true);

	let initialStateWithStorage;
	const getInitialStore = async () => {
		const persistedStore = await persistState.retrieveData('persistedStore');

		if (persistedStore) {
			initialStateWithStorage = { ...initialStateCombined, ...persistedStore };
		} else {
			initialStateWithStorage = initialStateCombined;
		}

		// @ts-ignore
		dispatch(usuarioActions.setUsuario(initialStateWithStorage.usuario));
		setLoading(false);
	}

	useEffect(() => {
		getInitialStore();
	}, [])

	useEffect(() => {
		persistState.storeData('persistedStore', state);
	});

	if (loading) {
		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				<ActivityIndicator size={'large'} />
			</View>
		);
	} else {
		return (
			<StateContext.Provider
				value={contextReducersAndState}
				children={children}
			/>
		);
	}
};

export const useStore = () => useContext(StateContext);
