import React, { FunctionComponent } from 'react';
import {View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '../../Themes';
import styles from './LoginScreenStyles';
import _ from 'lodash';
import { FloatingLabelInput } from '../../Components/FloatingLabelInput/FloatingLabelInput';

const LoginScreen: FunctionComponent<any> = () => {
	const navigation = useNavigation();
  return (
    <KeyboardAvoidingView contentContainerStyle={styles.fullContainer}>
      <LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]}>
				<View style={styles.mainContainer}>
					<Image source={Images.petCareLogo}/>
					<FloatingLabelInput
						// ref={(ref: FloatingLabelInput) => {
						// 		this.inputRefs['username'] = ref;
						// }}
						label={'Teste'}
						value={'teste'}
						error={''}
						isFieldCorrect={true}
						maxLength={60}
						onChangeText={(value) => this.onChangeFormValue('username', value)}
						keyboardType={'email-address'}
						returnKeyType={'next'}
						onSubmitEditing={() => this.onEndEditingField('username')}
				/>
				</View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
