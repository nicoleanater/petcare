import { useNavigation } from '@react-navigation/core';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, FunctionComponent, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import styles from './MensagensListScreenStyles';

interface IProps { }

export const MensagensListScreen: FunctionComponent<IProps> = (props) => {
	const navigation = useNavigation();


	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Mensagens"} theme={'light'} />,
		});
	}, [navigation]);

	return (
		<View>
			<Text>MensagensListScreen</Text>
		</View>
	);
};
