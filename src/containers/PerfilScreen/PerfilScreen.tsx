import { useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { TabBar, TabView } from 'react-native-tab-view';
import { AuthHeader } from '../../components/AuthHeader/AuthHeader';
import { CardAnimal } from '../../components/CardAnimal/CardAnimal';
import { CardAvaliacao } from '../../components/CardAvaliacao/CardAvaliacao';
import { ImageGradientPicker } from '../../components/ImageGradientPicker/ImageGradientPicker';
import { RatingStars } from '../../components/RatingStars/RatingStars';
import { Animal } from '../../models/Animal';
import { Avaliacao } from '../../models/Avaliacao';
import { TipoUsuario, Usuario } from '../../models/Usuario';
import { buscarUsuario } from '../../services/usuario';
import { useStore } from '../../store';
import { Colors } from '../../themes';
import { getTipoUsuario } from '../../utils/StringUtils';
import styles from './PerfilScreenStyles';
import { TabDados } from './TabDados';

const TabAvaliacoes = ({ avaliacoes }) => (
	<ScrollView style={styles.tabsBackground}>
		{avaliacoes.map((avaliacao: Avaliacao, i) =>  (
			<CardAvaliacao avaliacao={avaliacao} key={i}/>
		))}
		<View style={{height: 60}}/>
	</ScrollView>
);

const TabAnimais = ({ animais }) => (
	<ScrollView style={styles.tabsBackground}>
		{animais.map((animal: Animal, i) =>  (
			<CardAnimal animal={animal} key={i}/>
		))}
		<View style={{height: 60}}/>
	</ScrollView>
);
interface IProps {
	route: {
		params: {
			usuarioPerfil?: Usuario;
		}
	}
}

interface IState {
	usuario: Usuario;
}

export const PerfilScreen: FunctionComponent<IProps> = (props) => {
	const initialState: IState = {
		usuario: props.route.params?.usuarioPerfil
	};

	const navigation = useNavigation();
	const [{ usuario: storedUsuario }] = useStore();
	const [usuario, setUsuario] = useState(initialState.usuario);
	const [ownProfile] = useState((props.route.params?.usuarioPerfil != null) ? false : true);

	const [index, setIndex] = useState(0);
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		if (usuario == null) {
			searchUser(storedUsuario.id);
		} else {
			updateTabs(usuario.tipo_usuario);
		}
	}, [usuario])


	const searchUser = async (id: number) => {
		const res = await buscarUsuario(id);
		setUsuario(res.data);
		updateTabs(res.data.tipo_usuario);
	}

	const updateTabs = (tipo_usuario: TipoUsuario) => {
		setRoutes(() => {
			if (tipo_usuario === TipoUsuario.PET_SITTER) {
				return [
					{ key: 'dados', title: 'DADOS' },
					{ key: 'avaliacoes', title: 'AVALIAÇÕES' }
				];
			} else if (tipo_usuario === TipoUsuario.DONO_DE_ANIMAL) {
				return [
					{ key: 'dados', title: 'DADOS' },
					{ key: 'avaliacoes', title: 'AVALIAÇÕES' },
					{ key: 'animais', title: 'ANIMAIS' }
				];
			}
		})
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			header: (props: StackHeaderProps) => <AuthHeader {...props} title={"Perfil"} theme={'transparent'} headerRight={ownProfile ? false : usuario.tipo_usuario}/>,
		});
	}, [navigation]);


	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'dados':
				return <TabDados usuario={usuario}/>;
			case 'avaliacoes':
				return <TabAvaliacoes avaliacoes={usuario.avaliacoes}/>;
			case 'animais':
				return <TabAnimais animais={usuario.animais}/>;
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
			activeColor={Colors.redOne}
			inactiveColor={Colors.blackOne}
		/>
	);

	if (usuario == null) {
		return (
			<View style={[styles.verticalCenterAlignedColumn, styles.marginTop]}>
				<ActivityIndicator size='large'/>
			</View>
		);
	}

	return (
		<LinearGradient colors={[Colors.gradientPink, Colors.gradientPeach]} style={styles.perfilGradientHeader} start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}>
			<View style={styles.userInfoContainer}>
				<ImageGradientPicker
					image={usuario.foto}
					style={styles.smallMarginBottom}
					noBorder
				/>
				<View style={styles.rightAlignedColumn}>
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
