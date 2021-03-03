import { useKeyboard } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import moment from 'moment';
import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardDatesInterval } from '../../components/CardDatesInterval/CardDatesInterval';
import { CardUsuario } from '../../components/CardUsuario/CardUsuario';
import FloatingLabelInput from '../../components/FloatingLabelInput/FloatingLabelInput';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { Avaliacao } from '../../models/Avaliacao';
import { Compromisso } from '../../models/Compromisso';
import { TipoUsuario } from '../../models/Usuario';
import { criarAvaliacao } from '../../services/compromisso';
import { useStore } from '../../store';
import { getTipoUsuario } from '../../utils/StringUtils';
import styles from './AvaliacaoScreenStyles';

interface IProps {
	route: {
		params: {
			compromisso: Compromisso;
		}
	}
}

interface IState {
	nota: number;
	descricao: string;
	avaliacao: Avaliacao;
}

export const AvaliacaoScreen: FunctionComponent<IProps> = (props) => {
	const navigation = useNavigation();
	const [{ usuario: { tipo_usuario } }] = useStore();
	const compromisso = props.route.params?.compromisso;

	const avaliacaoParam = tipo_usuario === TipoUsuario.PET_SITTER ? compromisso.avaliacao_petsitter : compromisso.avaliacao_dono_de_animal;

	const initialState: IState = {
		nota: 0,
		descricao: '',
		avaliacao: avaliacaoParam != null ? avaliacaoParam : null
	};

	const [nota, setRating] = useState(initialState.nota);
	const [descricao, setDescricao] = useState(initialState.descricao);
	const [avaliacao, setAvaliacao] = useState(initialState.avaliacao);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromissos"} theme={'light'} />,
		});
	}, [navigation]);

	const onSalvarPressed = async () => {
		const newAvaliacao: Avaliacao = {
			tipo_usuario: tipo_usuario,
			data: moment().format(),
			nota,
			descricao
		}

		try {
			const res = await criarAvaliacao(newAvaliacao, compromisso.id);
			const novoCompromisso = res.data;
			const avaliacaoCriada = TipoUsuario.DONO_DE_ANIMAL ? novoCompromisso.avaliacao_dono_de_animal : novoCompromisso.avaliacao_petsitter;
			setAvaliacao(avaliacaoCriada);
			Alert.alert(
				"Sucesso",
				"Avaliação adicionada com sucesso!",
				[
					{ text: "OK", onPress: () => navigation.navigate('DetalhesCompromisso', { compromisso: novoCompromisso })}
				],
				{ cancelable: false }
			);
		} catch (error) {
			console.error({error});
		}
	}

	return (
			<KeyboardAvoidingView
				contentContainerStyle={styles.fullContainer}
				keyboardVerticalOffset={-170}
				behavior={'padding'}
			>
			<ScrollView style={styles.mainContainer}>
				<Text style={styles.screenTitleText}>Avaliar Perfil</Text>
				<Text style={styles.text.cardTitleText}>
					{tipo_usuario === TipoUsuario.PET_SITTER ? getTipoUsuario(TipoUsuario.DONO_DE_ANIMAL) : getTipoUsuario(TipoUsuario.PET_SITTER)}
				</Text>
				<CardUsuario usuario={tipo_usuario === TipoUsuario.PET_SITTER ? compromisso.dono_de_animal : compromisso.petsitter} />
				<Text style={styles.text.cardTitleText}>Data</Text>
				<CardDatesInterval dateStart={compromisso.data_inicio} dateEnd={compromisso.data_fim} />
				{avaliacao == null ?
					<View style={styles.ratingContainer}>
						<Text style={styles.text.cardTitleText}>Avaliar</Text>
						<RatingStars rating={nota} size={'big'} touchable onStarPressed={setRating} />
					</View>
					:
					<View style={styles.ratingContainer}>
						<Text style={styles.text.cardTitleText}>Avaliacao</Text>
						<RatingStars rating={avaliacao.nota} size={'big'} />
					</View>
				}
				{avaliacao == null ?
					<FloatingLabelInput
						placeholder={'Descreva como foi sua experiência'}
						value={descricao}
						maxLength={200}
						onChangeText={setDescricao}
						isFieldCorrect={true}
						multiline={'medium'}
					/>
					:
					<View style={styles.descricaoCard}>
						<Text>{avaliacao.descricao}</Text>
					</View>
				}
				{avaliacao == null && <RoundedButton label={'Salvar'} onPress={onSalvarPressed} style={styles.alignSelfCenter}/>}
				<View style={{height: 60}}/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
