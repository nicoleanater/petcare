import { useIsFocused, useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardChat } from '../../components/CardChat/CardChat';
import { Mensagem } from '../../models/Mensagem';
import { buscaChats } from '../../services/mensagem';
import { useStore } from '../../store';
import styles from './MensagensListScreenStyles';

interface IProps { }

interface IState {
  chats: Array<Mensagem>;
}

export const MensagensListScreen: FunctionComponent<IProps> = (props) => {
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const initialState: IState = {
		chats: [],
	};

	const [{ usuario }] = useStore();
	const [chats, setChats] = useState(initialState.chats);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Mensagens"} theme={'light'} />,
		});
	}, [navigation]);

	useEffect(() => {
		if (isFocused) {
			getChats();
		}
	}, [isFocused]);

	const getChats = async () => {
		try {
			const res = await buscaChats(usuario.id);
			setChats(res.data);
		} catch (error) {
			console.error({error});
		}
	}

	return (
		<ScrollView style={styles.mensagensBackground}>
			{chats.map((item: Mensagem, i) => {
				return (
					<CardChat mensagem={item} key={i} />
				)
			})}
			<View style={{height: 40}}/>
		</ScrollView>
	);
};
