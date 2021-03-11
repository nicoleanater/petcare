import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, IMessage, InputToolbar, Send } from 'react-native-gifted-chat';
import 'dayjs/locale/pt-br'
import styles from './ChatWrapperStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes';

interface IProps {
	messages: Array<IMessage>;
	onSend: (messages: Array<IMessage>) => void;
	currentUserId: number;
}

export const ChatWrapper: FunctionComponent<IProps> = ({ messages, onSend, currentUserId }) => {

	const renderBubble = (props => {
    return (
      <Bubble
        {...props}
        textStyle={{ left: styles.leftTextStyle, right: styles.rightTextStyle }}
        wrapperStyle={{ left: styles.bubbleLeftStyle, right: styles.bubbleRightStyle }}
      />
    );
  })


	const renderInputToolbar = (props) => {
		return (
			<InputToolbar
				{...props}
				containerStyle={styles.inputWrapperStyle}
				primaryStyle={styles.inputContainerStyle}
				placeholderTextColor={Colors.grayOne}
				textInputStyle={styles.textInputStyle}
			/>
		);
	}

	const renderSend = (defaultProps) => {
		const { containerStyle, ...props } = defaultProps;
		return (
			<Send {...props}>
				<Icon name={'send'} style={styles.iconStyle} size={28}/>
			</Send>
		);
	}

	return (
		<GiftedChat
			messages={messages}
			onSend={messages => onSend(messages)}
			user={{
				_id: currentUserId,
			}}
			placeholder={"Digite sua mensagem..."}
			alwaysShowSend
			alignTop
			locale={'pt-br'}
			renderBubble={renderBubble}
			renderInputToolbar={renderInputToolbar}
			renderSend={renderSend}
			messagesContainerStyle={{paddingBottom: 25}}
		/>
	);
};
