import AsyncStorage from "@react-native-community/async-storage";
import _ from 'lodash';

const filterState = (state) => {
	const whiteList = {
		['usuario']: ['id', 'nome', 'foto', 'tipo_usuario']
	}

	const stateToPersist = Object.entries(state)
	.map(([key, value]) => {
		if (whiteList[key] != null) {
			return {[key]: _.pick(value, whiteList[key])};
		} else {
			return;
		}
	})
	.reduce((accum, item) =>  ({...accum, ...item}), {});

	return stateToPersist;
}

const storeData = async (key, state) => {
	try {
		state = filterState(state);
		await AsyncStorage.setItem(key, JSON.stringify(state));
	} catch (error) {
		console.log('store data error', error);
	}
};

const retrieveData = async (key: string) => {
	let state = null;
	try {
		state = await AsyncStorage.getItem(key);
		state = JSON.parse(state);
	} catch (error) {
		console.log('retrieve data error', error);
	}
	return state;
};

export default { storeData, retrieveData };
