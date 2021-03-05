import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TabBar, TabView } from 'react-native-tab-view';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { ImageGradientPicker } from '../../components/ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import { Usuario } from '../../models/Usuario';
import { useStore } from '../../store';
import { Colors } from '../../themes';
import { getTipoUsuario } from '../../utils/StringUtils';
import styles from './PerfilScreenStyles';
interface IProps {
	route: {
		params: {
			usuarioPerfil?: Usuario;
		}
	}
}

interface IState {
	// State type definition
}

export const PerfilScreen: FunctionComponent<IProps> = (props) => {
	const initialState: IState = {
	};
	const navigation = useNavigation();
	const [{ usuario: storedUsuario }] = useStore();
	const usuarioPerfil = props.route.params?.usuarioPerfil;

	const usuario = usuarioPerfil != null ? usuarioPerfil : storedUsuario;

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Perfil"} theme={'transparent'} />,
		});
	}, [navigation]);

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'dados', title: 'DADOS' },
		{ key: 'avaliacoes', title: 'AVALIAÇÕES' },
	]);

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'dados':
				return <View style={{backgroundColor: 'white', flex: 1}}><Text>aaa</Text></View>;
			case 'avaliacoes':
				return <View style={{backgroundColor: 'white', flex: 1}}><Text>bbb</Text></View>;
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
		<LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]} style={styles.perfilGradientHeader} start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}>
			<View style={styles.userInfoContainer}>
				<ImageGradientPicker
					image={usuario.foto}
					style={styles.smallMarginBottom}
					noBorder
				/>
				<View>
					<Text style={styles.nameTextStyle}>{usuario.nome}</Text>
					<Text style={styles.userTypeTextStyle}>{getTipoUsuario(usuario.tipo_usuario)}</Text>
					<RatingStars rating={usuario.nota_media} size={'medium'}/>
				</View>
			</View>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onIndexChange={setIndex}
				initialLayout={{ width: Dimensions.get('window').width }}
			/>
		</LinearGradient>
	);
};
