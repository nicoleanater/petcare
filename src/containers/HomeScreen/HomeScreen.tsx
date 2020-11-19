import React, { FunctionComponent } from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const HomeScreen: FunctionComponent<any> = () => {
	const navigation = useNavigation<DrawerNavigationProp<any, any>>();
  return (
    <View>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text>TELA HOME</Text>
				<TouchableOpacity onPress={() => {navigation.openDrawer()}}>
					<Text>
						Abrir drawer
					</Text>
				</TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
