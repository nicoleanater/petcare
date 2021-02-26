import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useRef, MutableRefObject, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { IRefFloatingLabel } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { HeaderCadastro } from '../../components/HeaderCadastro/HeaderCadastro';
import { useStore } from '../../store';
import styles from './CadastroEnderecoStyles';

interface IProps { }

interface IState {
	formValues: {
		cep: string;
		rua: string;
		numero: number;
		bairro: string;
		complemento: string;
		uf: number;
		cidade: number;
	};
	formErrors: {
		[name: string]: string | null;
	};
}

export const CadastroEndereco: FunctionComponent<IProps> = () => {
	const inputRefs: { [field: string]: MutableRefObject<IRefFloatingLabel> } = {
		cep: useRef(null),
		rua: useRef(null),
		numero: useRef(null),
		bairro: useRef(null),
		complemento: useRef(null),
		uf: useRef(null),
		cidade: useRef(null)
	};

	const navigation = useNavigation();
	const [{ usuario }, dispatch] = useStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <HeaderCadastro {...props} userType={usuario.tipo} screenStep={'Endereço'}/>,
		});
	}, [navigation]);


	const initialState: IState = {
		formValues: {
			cep: usuario.endereco?.cep,
			rua: usuario.endereco?.rua,
			numero: usuario.endereco?.numero,
			bairro: usuario.endereco?.bairro,
			complemento: usuario.endereco?.complemento,
			uf: usuario.endereco?.cidade.estado.id,
			cidade: usuario.endereco?.cidade.id
		},
		formErrors: {}
	};

    return (
        <View>
					<Text>Alow</Text>
        </View>
    );
};
