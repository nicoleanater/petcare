import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { TipoUsuario } from '../../models/Usuario';
import { Images } from '../../themes';
import { BackButton } from '../BackButton/BackButton';
import styles from './HeaderCadastroStyles';

interface IProps {
	userType: TipoUsuario;
	screenStep: String;
}

const userTypeText = {
	[TipoUsuario.DONO_DE_ANIMAL]: 'DONO DE ANIMAL',
	[TipoUsuario.PET_SITTER]: 'PET SITTER',
}

export const HeaderCadastro: FunctionComponent<IProps & StackHeaderProps> = (props) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.upperHeaderContainer}>
				{props.previous ? <BackButton onPress={props.navigation.goBack} theme={'dark'}/> : undefined}
				<Text style={styles.headerTextStyle}>Cadastro</Text>
			</View>
			<View style={styles.lowerHeaderContainer}>
				{props.userType === TipoUsuario.DONO_DE_ANIMAL && <Image source={Images.circlePaw} style={styles.smallMarginRight}/>}
				{props.userType === TipoUsuario.PET_SITTER && <Image source={Images.circlePet} style={styles.smallMarginRight}/>}
				<View>
					<Text style={styles.textTipoUsuario}>{userTypeText[props.userType]}</Text>
					<Text style={styles.textScreenStep}>{props.screenStep}</Text>
				</View>
			</View>
		</View>
	);
};
