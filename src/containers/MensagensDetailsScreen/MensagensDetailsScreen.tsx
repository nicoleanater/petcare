import { useIsFocused, useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useState, useLayoutEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { Mensagem } from '../../models/Mensagem';
import { Usuario } from '../../models/Usuario';
import { buscaDetalhesChat } from '../../services/mensagem';
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
	outroUsuario: Usuario;
	messages: Array<Mensagem>;
}

export const MensagensDetailsScreen: FunctionComponent<IProps> = (props) => {
	const currentUserId = props.route.params?.currentUserId;
	const otherUserId = props.route.params?.otherUserId;
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	const initialState: IState = {
		outroUsuario: null,
		messages: null
	};

	const [messages, setMessages] = useState(initialState.messages);
	const [outroUsuario, setOutroUsuario] = useState(initialState.outroUsuario);

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
		try {
			const res = await buscaDetalhesChat(currentUserId, otherUserId);
			setOutroUsuario(res.data.usuario);
			setMessages(res.data.mensagens);
		} catch (error) {
			console.error({error});
		}
	}

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
