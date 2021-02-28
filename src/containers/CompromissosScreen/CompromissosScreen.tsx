import { useNavigation } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabBar, TabView } from 'react-native-tab-view';
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { CardCompromisso } from "../../components/CardCompromisso/CardCompromisso";
import { Compromisso } from "../../models/Compromisso";
import { buscaCompromissosAtivos, buscaCompromissosHistorico } from "../../services/compromisso";
import { useStore } from "../../store";
import styles from './CompromissosScreenStyles';

const CompromissosAtivos = ({ compromissos }) => (
	<ScrollView style={styles.tabsBackground}>
		{compromissos.map((item: Compromisso, i) => {
			return (
				<CardCompromisso compromisso={item} key={i}/>
			)
		})}
	</ScrollView>
);

const CompromissosHistorico = ({ compromissos }) => (
	<ScrollView style={styles.tabsBackground}>
		{compromissos.map((item: Compromisso, i) => {
			return (
				<CardCompromisso compromisso={item} key={i}/>
			)
		})}
	</ScrollView>
);

const CompromissosScreen: FunctionComponent<any> = () => {
	const navigation = useNavigation();
	const [{ usuario }] = useStore();
	const [compromissosAtivos, setCompromissosAtivos] = useState<Array<Compromisso>>([]);
	const [compromissosHistorico, setCompromissosHistorico] = useState<Array<Compromisso>>([]);

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromissos"} theme={'light'} />,
		});
	}, [navigation]);

	useEffect(()=> {
		buscaCompromissos();
	}, [])

	const buscaCompromissos = async () => {
		try {
			const { data: arrayAtivos } = await buscaCompromissosAtivos(usuario.id);
			const { data: arrayHistorico } = await buscaCompromissosHistorico(usuario.id);
			setCompromissosAtivos(arrayAtivos);
			setCompromissosHistorico(arrayHistorico);
		} catch (error) {
			console.error({error});
		}
	}

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'ativos', title: 'ATIVOS' },
		{ key: 'historico', title: 'HISTÓRICO' },
	]);

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'ativos':
				return <CompromissosAtivos compromissos={compromissosAtivos} />;
			case 'historico':
				return <CompromissosHistorico compromissos={compromissosHistorico}/>;
			default:
				return null;
		}
	};

	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={styles.tabIndicatorStyle}
			style={styles.tabBarContainerStyle}
			labelStyle={styles.tabLabelStyle}
		/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={{ width: Dimensions.get('window').width }}
		/>
	);
}

export default CompromissosScreen;
