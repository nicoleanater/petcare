import { useIsFocused, useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import moment from 'moment-timezone';
import React, { FunctionComponent, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
import { MaskService } from 'react-native-masked-text';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { ChatWrapper } from '../../components/ChatWrapper/ChatWrapper';
import { ImageGradientPicker } from '../../components/ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import { Mensagem } from '../../models/Mensagem';
import { TipoUsuario, Usuario } from '../../models/Usuario';
import { adicionarMensagem, buscaDetalhesChat } from '../../services/mensagem';
import { Colors } from '../../themes';
import { renderAnimaisText } from '../../utils/StringUtils';
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
	messages: Array<IMessage>;
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
			setMessages(transformMessagesForChat(res.data.mensagens));
		} catch (error) {
			console.error({error});
		}
	}

	const transformMessagesForChat = (mensagens: Array<Mensagem>) => {
		return mensagens.map(mensagem => {
			const dateTimeUTC = moment(mensagem.data, 'YYYY-MM-DDTHH:mm:ss').format();
			const dateTimeLocal = moment(dateTimeUTC).tz('America/Sao_Paulo').toDate();

			const message: IMessage = {
				_id: mensagem.id,
				text: mensagem.texto,
				createdAt: dateTimeLocal,
				user: { _id: mensagem.usuario.id, ...mensagem.usuario }
			}
			return message;
		});
	}

	const onSend = useCallback(async (messages = []) => {
		const dateCreated = moment.tz('America/Sao_Paulo');

		const novaMensagem: Mensagem = {
			texto: messages[0].text,
			data: dateCreated.format(),
			remetente: currentUserId,
			destinatario: otherUserId
		}

		const dateTimeLocal = dateCreated.format();

		const message: IMessage = {
			_id: messages[0]._id,
			text: messages[0].text,
			createdAt: moment(dateTimeLocal, 'YYYY-MM-DDTHH:mm:ss').toDate(),
			user: { _id: messages[0].user._id }
		}
    setMessages(previousMessages => GiftedChat.append(previousMessages, [message]))
		try {
			await adicionarMensagem(novaMensagem);
		} catch (error) {
			console.error({error});
		}
  }, [])

	const renderUserTextDetails = () => {
		if (outroUsuario.tipo_usuario === TipoUsuario.PET_SITTER) {
			return (<>
				<Text style={styles.userDetailsText}>{`${outroUsuario.endereco.cidade.descricao} - ${outroUsuario.endereco.cidade.estado.sigla}`}</Text>
				<Text style={styles.userDetailsText}>{outroUsuario.endereco.bairro}</Text>
			</>);
		}

		if (outroUsuario.tipo_usuario === TipoUsuario.DONO_DE_ANIMAL){
			return (<>
				<Text style={[styles.text.cardContent, styles.xSmallMarginBottom]}>{renderAnimaisText(outroUsuario.animais)}</Text>
			</>);
		}
	}

	const renderPrice = () => {
		return MaskService.toMask('money', outroUsuario.preco.toFixed(2), { unit: 'R$ '});
	}

	if (messages == null) {
		return (
			<View style={[styles.verticalCenterAlignedColumn, styles.marginTop]}>
				<ActivityIndicator size='large'/>
			</View>
		);
	}

	return (
		<View style={{flex: 1}}>
			<LinearGradient colors={[Colors.gradientPink, Colors.gradientYellow]} style={styles.gradientHeader} start={{x: 0, y: 0}} end={{x: 0.7, y: 0.7}}>
			<ImageGradientPicker
				image={outroUsuario.foto}
				noBorder
				small
			/>
			<View style={styles.userInfoContainer}>
				<View style={{maxWidth: 150, marginRight: 20}}>
					<Text style={styles.nomeTextStyle}>{outroUsuario.nome}</Text>
					{renderUserTextDetails()}
				</View>
				<RatingStars rating={outroUsuario.nota_media} amount={outroUsuario.qtde_avaliacoes} size={'small'}/>
				{outroUsuario.tipo_usuario === TipoUsuario.PET_SITTER &&
					<View style={styles.priceContainer}>
						<Text style={styles.priceValueText}>{renderPrice()}</Text>
						<Text style={styles.priceUnitText}>/ hora</Text>
					</View>
				}
			</View>
			</LinearGradient>
			<ChatWrapper messages={messages} onSend={onSend} currentUserId={currentUserId} />
		</View>
	);
};
