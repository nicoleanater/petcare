import { useKeyboard } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardDatesInterval } from '../../components/CardDatesInterval/CardDatesInterval';
import { CardUsuario } from '../../components/CardUsuario/CardUsuario';
import FloatingLabelInput from '../../components/FloatingLabelInput/FloatingLabelInput';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { Compromisso } from '../../models/Compromisso';
import { TipoUsuario } from '../../models/Usuario';
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
}

export const AvaliacaoScreen: FunctionComponent<IProps> = (props) => {
	const navigation = useNavigation();
	const [{ usuario: tipo_usuario }] = useStore();
	// const compromisso = props.route.params?.compromisso;
	const compromisso = {
		"agendamentos": [
			{
				"SQLData": "2021-03-01Z",
				"data": "2021-03-01Z",
				"id_agendamento": 33,
				"id_compromisso": 0
			},
			{
				"SQLData": "2021-03-02Z",
				"data": "2021-03-02Z",
				"id_agendamento": 34,
				"id_compromisso": 0
			},
			{
				"SQLData": "2021-03-03Z",
				"data": "2021-03-03Z",
				"id_agendamento": 35,
				"id_compromisso": 0
			}
		],
		"avaliacao_petsitter": {
			"descricao": "Achei legal",
			"id": 5,
			"id_avaliador": 0,
			"nota": 3
		},
		"data_fim": "2021-03-03Z",
		"data_inicio": "2021-03-01Z",
		"dono_de_animal": {
			"email": "novo@teste.com",
			"endereco_id": 0,
			"id": 18,
			"nome": "Mia Latifa",
			"nota_media": 0,
			"preco": 0,
			"tipo_usuario": "DONO_DE_ANIMAL",
			"animais": [
				{
					"descricao": "a",
					"genero": "FEMEA",
					"nome": "Pantera",
					"raca": "SRD",
					"tipo_animal": "CACHORRO",
					"usuario_id": 18
				}
			],
			"endereco": {
				"bairro": "Centro",
				"cep": "56565656",
				"cidade": {
					"descricao": "Aloândia",
					"estado": {
						"descricao": "Goiás",
						"id": 9,
						"sigla": "GO"
					},
					"id": 891
				},
				"complemento": "a",
				"numero": 3,
				"rua": "Teste"
			},
			"qtde_avaliacoes": 2
		},
		"id": 16,
		"petsitter": {
			"descricao": "Eu sou muito atenciosa",
			"email": "joanadark@email.com",
			"endereco_id": 0,
			"foto": "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",
			"id": 19,
			"nome": "Joanna Dark",
			"nota_media": 0,
			"preco": 45,
			"tipo_usuario": "PET_SITTER",
			"endereco": {
				"bairro": "Centro",
				"cep": "55555555",
				"cidade": {
					"descricao": "Aracruz",
					"estado": {
						"descricao": "Espírito Santo",
						"id": 8,
						"sigla": "ES"
					},
					"id": 9
				},
				"numero": 5,
				"rua": "Av. Teste"
			},
			"qtde_avaliacoes": 2
		},
		"status": "FINALIZADO"
	}

	const avaliacao = tipo_usuario === TipoUsuario.DONO_DE_ANIMAL ? compromisso.avaliacao_petsitter : compromisso.avaliacao_dono_de_animal;

	const initialState: IState = {
		nota: 0,
		descricao: ''
	};
	const [nota, setRating] = useState(initialState.nota);
	const [descricao, setDescricao] = useState(initialState.descricao);
	const keyboard = useKeyboard()

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromissos"} theme={'light'} />,
		});
	}, [navigation]);

	const onSalvarPressed = () => {
		//todo
	}

	return (
			<KeyboardAvoidingView
				contentContainerStyle={styles.fullContainer}
				keyboardVerticalOffset={-keyboard.keyboardHeight + 80}
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
				<View style={styles.ratingContainer}>
					<Text style={styles.text.cardTitleText}>Avaliar:</Text>
					<RatingStars rating={nota} size={'big'} touchable onStarPressed={setRating} />
				</View>
				<FloatingLabelInput
					placeholder={'Descreva como foi sua experiência'}
					value={descricao}
					maxLength={200}
					onChangeText={setDescricao}
					isFieldCorrect={true}
					multiline={'medium'}
				/>
				<RoundedButton label={'Salvar'} onPress={onSalvarPressed} style={styles.alignSelfCenter}/>
				<View style={{height: 60}}/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
