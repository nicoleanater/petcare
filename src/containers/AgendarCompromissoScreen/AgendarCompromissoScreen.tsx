import { useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import _ from 'lodash';
import React, { FunctionComponent, MutableRefObject, useLayoutEffect, useRef, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardEndereco } from '../../components/CardEndereco/CardEndereco';
import { CardUsuario } from '../../components/CardUsuario/CardUsuario';
import FloatingLabelInput, { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { Compromisso } from '../../models/Compromisso';
import { Usuario } from '../../models/Usuario';
import { criarCompromisso } from '../../services/compromisso';
import { useStore } from '../../store';
import { validateDateFuture } from '../../utils/ValidationForms';
import styles from './AgendarCompromissoScreenStyles';

interface IProps {
	route: {
		params: {
			usuario: Usuario;
		}
	}
}

interface IState {
	data_inicio: string;
	data_fim: string;
	data_inicioError: string;
	data_fimError: string;
}

export const AgendarCompromissoScreen: FunctionComponent<IProps> = (props) => {
	const dataInicioRef: MutableRefObject<IRefFloatingLabel> = useRef(null);
	const dataFimRef: MutableRefObject<IRefFloatingLabel> = useRef(null);

	const navigation = useNavigation();
	const usuario = props.route.params?.usuario;
	const [{usuario: currentUsuario}] = useStore();

	const initialState: IState = {
		data_inicio: '',
		data_inicioError: null,
		data_fim: '',
		data_fimError: null
	};

	const [data_inicio, setData_inicio] = useState(initialState.data_inicio);
	const [data_inicioError, setData_inicioError] = useState(initialState.data_inicioError);
	const [data_fim, setData_fim] = useState(initialState.data_fim);
	const [data_fimError, setData_fimError] = useState(initialState.data_fimError);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Agendar Compromisso"} theme={'light'} />,
		});
	}, [navigation]);

	const validateFields = () => {
		let valid = true;

		if (_.isEmpty(data_inicio)) {
			setData_inicioError('obrigatório');
			valid = false;
		} else if (!validateDateFuture(dataInicioRef)) {
			setData_inicioError('data inválida')
			valid = false;
		}

		if (_.isEmpty(data_fim)) {
			setData_fimError('obrigatório');
			valid = false;
		} else if (!validateDateFuture(dataFimRef)) {
			setData_fimError('data inválida')
			valid = false;
		}

		return valid;
	};

	const onAgendarPressed = async () => {
		if (validateFields()) {
			const newCompromisso: Compromisso = {
				petsitter: {id: usuario.id},
				dono_de_animal: {id: currentUsuario.id},
				data_inicio: dataInicioRef.current.getRawValue(),
				data_fim: dataFimRef.current.getRawValue()
			}

			try {
				await criarCompromisso(newCompromisso);
				Alert.alert(
					"Sucesso",
					"Seu compromisso foi agendado com sucesso!",
					[
						{ text: "OK", onPress: () => 	navigation.goBack()}
					],
					{ cancelable: false }
				);
			} catch (error) {
				console.error({error});
			}
		}
	}

	return (
		<ScrollView style={styles.mainContainer}>
			<Text style={styles.text.cardTitleText}>Pet Sitter</Text>
			<CardUsuario usuario={usuario} />
			<Text style={styles.text.cardTitleText}>Data</Text>
			<FloatingLabelInput
				ref={dataInicioRef}
				label={'Início'}
				value={data_inicio}
				error={data_inicioError}
				mask={'datetime'}
				maskOptions={{format: 'DD/MM/YYYY'}}
				isFieldCorrect={_.isEmpty(data_inicioError)}
				onChangeText={(value) => { setData_inicio(value); setData_inicioError(null)}}
			/>
			<FloatingLabelInput
				ref={dataFimRef}
				label={'Fim'}
				value={data_fim}
				error={data_fimError}
				mask={'datetime'}
				maskOptions={{format: 'DD/MM/YYYY'}}
				isFieldCorrect={_.isEmpty(data_fimError)}
				onChangeText={(value) => { setData_fim(value); setData_fimError(null)}}
			/>
			<Text style={styles.text.cardTitleText}>Endereço</Text>
			<CardEndereco endereco={currentUsuario.endereco}/>
			<RoundedButton label={'Agendar'} onPress={onAgendarPressed} style={{alignSelf: 'center'}}/>
			<View style={{height: 60}}/>
		</ScrollView>
	);
};
