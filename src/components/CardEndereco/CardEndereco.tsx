import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { MaskService } from 'react-native-masked-text';
import { Endereco } from '../../models/Endereco';
import styles from './CardEnderecoStyles';
interface IProps {
	endereco: Endereco;
}

export const CardEndereco: FunctionComponent<IProps> = ({ endereco }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.row}>
				<Text style={styles.text.cardRegularText}>{endereco.rua}</Text>
				{endereco.numero != null && <Text style={styles.text.cardRegularText}>, {endereco.numero}</Text>}
			</View>
			<View style={styles.row}>
				{endereco.complemento != null && <Text style={styles.text.cardRegularText}>{endereco.complemento}, </Text>}
				<Text style={styles.text.cardRegularText}>{endereco.bairro}</Text>
			</View>
			<Text style={styles.text.cardRegularText}>{MaskService.toMask('zip-code',endereco.cep)}</Text>
			<View style={styles.row}>
				<Text style={styles.text.cardRegularText}>{endereco.cidade.descricao}</Text>
				<Text style={styles.text.cardRegularText}> - {endereco.cidade.estado.sigla}</Text>
			</View>
		</View>
	);
};
