import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { Text, View } from "react-native";
import { Colors } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';

const DrawerContent: FunctionComponent<any> = (props) => {
	// const navigation = useNavigation<DrawerNavigationProp<any, any>>();
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={{ backgroundColor: Colors.gray }}>
					<Text>Drawer content</Text>
					<DrawerItem
						icon={({ color, size }) => (
							<Icon
								name={'keyboard-arrow-right'}
								// style={styles.iconStyle}
								color={color}
								size={size}
							/>
						)}
						label="Compromisso"
						onPress={() => {
							props.navigation.navigate('Compromisso')

						}}
					/>
				</View>

			</DrawerContentScrollView>
			<View>
				<Text>Bottom</Text>
			</View>
		</View>
	);
};

export default DrawerContent;
