import React, { useEffect, useState, FunctionComponent } from 'react';
import { View, ImageRequireSource, ViewStyle, StyleProp, ImageStyle, ReturnKeyTypeOptions, Text, Image } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FloatingLabelInputStyles';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IProps {
	label: string;
	value?: string;
	error?: string | null;
	onFocus?: () => void;
	onChangeText?: (text: string) => void;
	keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
	maxLength?: number;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
	isFieldCorrect?: boolean;
	icon?: {name: string, size?: number, color?: string};
	iconStyle?: StyleProp<ImageStyle>;
	viewStyle?: ViewStyle[] | ViewStyle;
	secureTextEntry?: boolean;
	mask?: TextInputMaskTypeProp;
	maskOptions?: any;
	isFieldEditable?: boolean;
	returnKeyType?: ReturnKeyTypeOptions;
	onSubmitEditing?: () => void;
	onBlur?: () => void;
	// ref?: (ref: FloatingLabelInput) => void;
}

interface IState {
	isFocused: boolean;
	value: any;
}

export const FloatingLabelInput: FunctionComponent<IProps> = (props) => {
		
	const initialState: IState = {
			isFocused: false,
			value: props.value
    };

		const [isFocused, setIsFocused] = useState(initialState.isFocused)
		const [value, setValue] = useState(initialState.value)

    useEffect(() => {
        return () => {

        }
    }, [])

		const { label, icon, mask, maskOptions, isFieldEditable, autoCapitalize, ...restProps } = props;
    return (
			<View
					pointerEvents={props.isFieldEditable === false ? 'none' : 'auto'}
					style={[styles.floatingLabelStyle, props.viewStyle, /* this.borderStyle() */]}>
					{icon ? <Icon name={icon.name} style={!props.iconStyle ? styles.iconStyle : [styles.iconStyle, props.iconStyle]}/> : <View />}
					{/* <Animated.Text style={this.labelStyle()}>{props.error ? props.error : label}</Animated.Text> */}
					<Text>{props.error ? props.error : label}</Text>

					<View style={styles.inputContent}>
					{mask ? (
							<TextInputMask
									{...restProps}
									style={styles.inputStyle}
									onFocus={this.handleFocus}
									onSubmitEditing={props.onSubmitEditing}
									ref={(ref: any) => (this.maskedTextInput = ref)}
									onBlur={this.handleBlur}
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
							/>
					) : (
							<TextInput
									{...restProps}
									style={styles.inputStyle}
									onSubmitEditing={props.onSubmitEditing}
									ref={(ref: TextInput) => (this.textInput = ref)}
									onFocus={this.handleFocus}
									onBlur={this.handleBlur}
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
							/>
					)}

					{/* {!props.isFieldCorrect ? (
							<View style={styles.warningIconStyle}>
								
							</View>
					) : (
							<View />
					)} */}
					</View>
			</View>
    );
};




// export default class FloatingLabelInput extends React.Component<Props, State> {
//     animatedIsFocused: Animated.Value | any;
//     textInput: TextInput | any;
//     maskedTextInput: any;
   

//     focus() {
//         if (this.textInput) {
//             this.textInput.focus();
//         }

//         if (this.maskedTextInput) {
//             this.maskedTextInput.getElement().focus();
//         }
//     }

//     componentWillMount() {
//         this.animatedIsFocused = new Animated.Value(_.isEmpty(this.props.value) ? 0 : 1);
//     }

//     componentDidUpdate() {
//         Animated.timing(this.animatedIsFocused, {
//             toValue: (!!this.state.isFocused || !_.isEmpty(this.props.value)) ? 1 : 0,
//             duration: 200
//         }).start();
//     }

//     handleFocus = () => {
//         this.setState({ isFocused: true });
//     };

//     handleBlur = () => {
//         this.setState({ isFocused: false });
//         this.props.onBlur ? this.props.onBlur() : noop();
//     };

//     labelStyle: any = () => {
//         let labelStyle = {};
//         const labelColor = this.props.inputTheme === 'dark' ? styles.labelColorDark : styles.labelColorLight;
//         const labelColorError = this.props.inputTheme === 'dark' ? styles.labelColorErrorDark : styles.labelColorErrorLight;
//         if (this.props.icon) {
//             //    
//         } else {
//             labelStyle = {
//                 ...styles.labelStyle,
//                 color: this.props.isFieldCorrect ? labelColor : labelColorError,
//                 bottom: this.animatedIsFocused.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [styles.labelStyleBlur.bottom, styles.labelStyleFocused.bottom],
//                 }),
//                 fontSize: this.animatedIsFocused.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [styles.labelStyleBlur.fontSize, styles.labelStyleFocused.fontSize],
//                 })
//             }
//         }
//         return labelStyle;
//     };

//     borderStyle = () => {
//         if (this.props.error) {
//             if (this.state.isFocused) {
//                 return this.props.inputTheme === 'dark' ? styles.borderErrorDark : styles.borderErrorLight;
//             } else {
//                 return this.props.inputTheme === 'dark' ? styles.borderInactiveDark : styles.borderInactiveLight;
//             }
//         } else {
//             if (this.state.isFocused) {
//                 return this.props.inputTheme === 'dark' ? styles.borderActiveDark : styles.borderActiveLight;
//             } else {
//                 return this.props.inputTheme === 'dark' ? styles.borderInactiveDark : styles.borderInactiveLight;
//             }
//         }
//     };

//     public render() {
        
//     }
// }