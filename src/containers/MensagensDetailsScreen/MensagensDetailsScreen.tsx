import { useIsFocused, useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useState, useLayoutEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { Mensagem } from '../../models/Mensagem';
import styles from './MensagensDetailsScreenStyles';

interface IProps {
	route: {
		params: {
			currentUserId: number;
			otherUserId: number;
		}
	}
}

interface IState {
	messages: Array<Mensagem>;
}

export const MensagensDetailsScreen: FunctionComponent<IProps> = (props) => {
	const currentUserId = props.route.params?.currentUserId;
	const otherUserId = props.route.params?.otherUserId;
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const initialState: IState = {
		messages: null
	};

	const [messages, setMessages] = useState(initialState.messages);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Mensagens"} theme={'light'} />,
		});
	}, [navigation]);

	useEffect(() => {
		if (isFocused) {
			getMessages();
		}
	}, [isFocused]);

	const getMessages = async () => {
		// try {
		// 	const res = await buscaMensagens(usuario.id);
		// 	getMessages(res.data);
		// } catch (error) {
		// 	console.error({error});
		// }
	}

	console.log({currentUserId, otherUserId});

	if (messages == null) {
		return (
			<View style={[styles.verticalCenterAlignedColumn, styles.marginTop]}>
				<ActivityIndicator size='large'/>
			</View>
		);
	}

	return (
		<View>
			<Text>MensagensDetailsScreen</Text>
		</View>
	);
};
