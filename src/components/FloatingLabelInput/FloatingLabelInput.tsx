import _ from 'lodash';
import React, { forwardRef, MutableRefObject, RefForwardingComponent, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ImageStyle, ReturnKeyTypeOptions, StyleProp, TextInput, View, ViewStyle, Text } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import Animated, { Easing } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FloatingLabelInputStyles';

interface IProps {
	label?: string;
	value?: string;
	error?: string | null;
	onFocus?: () => void;
	onChangeText?: (text: string) => void;
	keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
	maxLength?: number;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
	isFieldCorrect?: boolean;
	icon?: { name: string, size?: number, color?: string };
	iconStyle?: StyleProp<ImageStyle>;
	viewStyle?: ViewStyle[] | ViewStyle;
	secureTextEntry?: boolean;
	mask?: TextInputMaskTypeProp;
	maskOptions?: any;
	isFieldEditable?: boolean;
	returnKeyType?: ReturnKeyTypeOptions;
	onSubmitEditing?: () => void;
	onBlur?: () => void;
	ref?: MutableRefObject<IRefFloatingLabel>;
	placeholder?: string;
	multiline?: 'medium' | 'big';
}

export interface IRefFloatingLabel {
	focus: () => void;
	isValid: () => boolean;
	getRawValue: () => any;
}

interface IState {
	isFocused: boolean;
}

export const FloatingLabelInput: RefForwardingComponent<IRefFloatingLabel, IProps> = (props, ref) => {
	let animatedIsFocused: Animated.Value<number> = useRef(new Animated.Value(_.isEmpty(props.value) ? 0 : 1)).current
	const textInput: MutableRefObject<TextInput> = useRef(null);
	const maskedTextInput: MutableRefObject<TextInputMask> = useRef(null);

	const initialState: IState = {
		isFocused: false,
	};

	const [isFocused, setIsFocused] = useState(initialState.isFocused)

	useEffect(() => {
		Animated.timing(animatedIsFocused, {
			toValue: (isFocused || !_.isEmpty(props.value)) ? 1 : 0,
			duration: 200,
			easing: Easing.inOut(Easing.ease)
		}).start();
	}, [isFocused])

	useImperativeHandle(ref, () => ({
		focus: () => {
			if (mask && maskedTextInput.current) {
				maskedTextInput.current.getElement().focus();
			} else if (textInput.current) {
				textInput.current.focus();
			}
		},
		isValid: () => {
			if (mask && maskedTextInput.current) {
				return maskedTextInput.current.isValid();
			}
			return;
		},
		getRawValue: () => {
			if (mask && maskedTextInput.current) {
				return maskedTextInput.current.getRawValue();
			}
			return;
		}
	}));

	const handleFocus = () => {
		setIsFocused(true);
	}

	const handleBlur = () => {
		setIsFocused(false);
		props.onBlur ? props.onBlur() : null;
	}

	const labelStyle: any = () => {
		let style = {
			...styles.labelStyle,
			bottom: animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [styles.labelStyleBlur.bottom, styles.labelStyleFocused.bottom],
			}),
			fontSize: animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [styles.labelStyleBlur.fontSize, styles.labelStyleFocused.fontSize],
			})
		}
		return style;
	};

	const { label, icon, mask, maskOptions, isFieldEditable, autoCapitalize, isFieldCorrect, error, placeholder, multiline, ...restProps } = props;
	return (
		<View style={[styles.inputContainer, props.viewStyle]}>
			<View
				pointerEvents={props.isFieldEditable === false ? 'none' : 'auto'}
				style={[styles.floatingLabelStyle, !isFieldCorrect && styles.floatingLabelErrorStyle, multiline === 'medium' && styles.textAreaInputMedium]}>
				{icon ? <Icon name={icon.name} style={!props.iconStyle ? styles.iconStyle : [styles.iconStyle, props.iconStyle]} /> : <View />}
				<Animated.Text style={[labelStyle(), icon && styles.labelWithIcon]}>{label}</Animated.Text>

				<View style={styles.inputContent}>
					{mask ? (
						<TextInputMask
							{...restProps}
							style={[styles.inputStyle, icon && styles.inputWithIcon, multiline && styles.inputMultilineStyle]}
							onFocus={handleFocus}
							onSubmitEditing={props.onSubmitEditing}
							ref={maskedTextInput}
							onBlur={handleBlur}
							placeholder={placeholder}
							placeholderTextColor={'rgba(255,255,255,0.7)'}
							underlineColorAndroid={'transparent'}
							autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
							maxLength={props.maxLength ? props.maxLength : 100}
							type={mask}
							options={maskOptions}
							onChangeText={(text: string) => {
								props.onChangeText!(text);
							}}
							autoCorrect={false}
							multiline={multiline != null}
						/>
					) : (
							<TextInput
								{...restProps}
								style={[styles.inputStyle, icon && styles.inputWithIcon, multiline && styles.inputMultilineStyle]}
								onSubmitEditing={props.onSubmitEditing}
								ref={textInput}
								onFocus={handleFocus}
								onBlur={handleBlur}
								placeholder={placeholder}
								autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
								underlineColorAndroid={'transparent'}
								value={props.value}
								editable={isFieldEditable !== undefined ? isFieldEditable : true}
								maxLength={props.maxLength ? props.maxLength : 100}
								onChangeText={(text) => {
									props.onChangeText!(text);
								}}
								keyboardType={props.keyboardType ? props.keyboardType : 'default'}
								secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
								multiline={multiline != null}
							/>
						)}
				</View>
			</View>
			<Text style={styles.errorText}>{error}</Text>
		</View>
	);
};

export default forwardRef(FloatingLabelInput);