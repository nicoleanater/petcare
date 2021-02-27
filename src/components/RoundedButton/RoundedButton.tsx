import React, { FunctionComponent } from 'react';
import { ActivityIndicator, Text, TextStyle, View, ViewStyle } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './RoundedButtonStyles';

interface IProps {
	onPress: () => void;
	disabled?: boolean;
	label?: string | null;
	style?: ViewStyle | ViewStyle[] | null;
	textStyle?: TextStyle | TextStyle[] | null;
	progressButton?: boolean;
	theme?: 'primary' | 'secondary';
	loading?: boolean;
	small?: boolean;
}

export const RoundedButton: FunctionComponent<IProps> = (props) => {
	const buttonStyle = props.theme === 'secondary' ? { ...styles.defaultButtonStyle, ...styles.secondaryButtonStyle } : styles.defaultButtonStyle;
	const textStyle = props.theme === 'secondary' ? { ...styles.defaultTextStyle, ...styles.secondaryTextStyle } : styles.defaultTextStyle;

	return props.progressButton == null ? (
		<TouchableScale
			tension={90}
			friction={6}
			disabled={props.disabled}
			onPress={props.onPress}
			style={[buttonStyle, props.small && styles.smallButton, props.style]}
		>
			{props.loading ? (
				<ActivityIndicator style={styles.loadingStyle} color={props.theme === 'secondary' ? Colors.gradientPink : Colors.white} />
			) : (
					<Text style={[textStyle, props.textStyle]}>
						{props.label}
					</Text>
				)}
		</TouchableScale >
	) : (
		<TouchableScale
			tension={90}
			friction={6}
			disabled={props.disabled}
			onPress={props.onPress}
			style={[buttonStyle, { paddingRight: 24 }, props.style]}
		>
			<View style={styles.verticalCenterAlignedRow}>
				{props.loading ? (
					<ActivityIndicator />
				) : (
					<Text
						style={[textStyle, styles.smallPaddingRight]}>
						{props.label}
					</Text>
				)}
				{props.progressButton ? <Icon name={'keyboard-arrow-right'} style={styles.iconStyle} size={28}/> : <View />}
			</View>
		</TouchableScale>
	);
};

export default RoundedButton;
