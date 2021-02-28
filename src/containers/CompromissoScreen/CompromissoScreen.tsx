import { useNavigation } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent, useLayoutEffect } from "react";
import { View } from "react-native";
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { TabBar } from "../../components/TabBar/TabBar";

const LoginScreen: FunctionComponent<any> = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromisso"} theme={'light'} />,
		});
	}, [navigation]);

	return (
		<View>
			<TabBar
				menus={[
					{ id: "1", title: "ATIVOS" },
					{ id: "2", title: "HISTÓRICO" },
				]}
			/>
		</View>
	);
};

export default LoginScreen;
