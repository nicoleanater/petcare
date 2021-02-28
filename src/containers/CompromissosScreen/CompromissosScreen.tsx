import { useNavigation } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { FunctionComponent, useLayoutEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { AuthHeader } from "../../components/AuthHeader/AuthHeader";
import styles from './CompromissosScreenStyles';

const CompromissosAtivos = () => (
  <View>
		<Text>Ativos</Text>
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
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Compromisso"} theme={'light'} />,
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
