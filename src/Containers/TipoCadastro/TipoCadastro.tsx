import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../themes';
import styles from './TipoCadastroStyles';

export const TipoCadastro: FunctionComponent<any> = () => {
    return (
        <View style={styles.mainContainer}>
					<LinearGradient
						colors={[Colors.gradientPink, Colors.gradientPeach]}
						start={{x: 0.4, y: 0}} end={{x: 0.8, y: 1.5}}
						style={styles.upperGradientContainer}>
						<Text style={[styles.textDescription, styles.marginBottom]}>Bem-vindo ao <Text style={styles.textBold}>PetCare</Text>!</Text>
						<Text style={styles.textDescription}>Primeiro precisamos saber</Text>
						<Text style={styles.textDescription}>que tipo de perfil você</Text>
						<Text style={styles.textDescription}>gostaria de criar</Text>
					</LinearGradient>
					<View style={styles.optionsContainer}>
						<Text>Down part</Text>
					</View>
					
        </View>
    );
};
