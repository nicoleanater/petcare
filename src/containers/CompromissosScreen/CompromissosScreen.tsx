import { useNavigation } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent, useLayoutEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import { CardCompromisso } from "../../components/CardCompromisso/CardCompromisso";
import { TipoAnimal } from "../../models/Animal";
import { Compromisso, CompromissoStatus } from "../../models/Compromisso";
import styles from './CompromissosScreenStyles';

const compromissos = [
	{
		usuario: {
			nome: "Julia",
			animais: [{
				tipo_animal: TipoAnimal.CACHORRO
			}],
		},
		data_inicio: "2021-10-10T14:48:00",
		data_fim: "2021-10-14T14:48:00",
		status: CompromissoStatus.EM_ANDAMENTO
	},
	{
		usuario: {
			nome: "João",
			animais: [{
				tipo_animal: TipoAnimal.GATO
			}],
		},
		data_inicio: "2021-10-10T14:48:00",
		data_fim: "2021-10-14T14:48:00",
		status: CompromissoStatus.AGENDADO
	},
	{
		usuario: {
			nome: "Camila",
			animais: [
				{	tipo_animal: TipoAnimal.GATO },
				{	tipo_animal: TipoAnimal.GATO },
				{	tipo_animal: TipoAnimal.GATO },
				{	tipo_animal: TipoAnimal.CACHORRO },
			],
		},
		data_inicio: "2021-10-10T14:48:00",
		data_fim: "2021-10-14T14:48:00",
		status: CompromissoStatus.AGENDADO
	},
];

const CompromissosAtivos = () => (
	<View style={styles.tabsBackground}>
		{compromissos.map((item: Compromisso, i) => {
			return (
				<CardCompromisso compromisso={item} key={i}/>
			)
		})}
	</View>
);

const CompromissosHistorico = () => (
	<View>
		<Text>Historico</Text>
	</View>
);

const CompromissosScreen: FunctionComponent<any> = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromissos"} theme={'light'} />,
		});
	}, [navigation]);

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'ativos', title: 'ATIVOS' },
		{ key: 'historico', title: 'HISTÓRICO' },
	]);

	const renderScene = SceneMap({
		ativos: CompromissosAtivos,
		historico: CompromissosHistorico,
	});

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
