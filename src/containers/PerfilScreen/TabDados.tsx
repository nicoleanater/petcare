import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TipoUsuario, Usuario } from "../../models/Usuario";
import styles from './PerfilScreenStyles';

interface IProps {
	usuario: Usuario;
}
export const TabDados: FunctionComponent<IProps> = ({ usuario }) => {
	return (
		<ScrollView style={styles.tabsBackground}>
			<View style={styles.cardContainer}>
				<View style={styles.cardLine}>
					<View style={styles.cardCell}>
						<Text style={styles.cardLabel}>Data de Nasc.</Text>
						<Text style={styles.cardValue}>{usuario.data_nasc}</Text>
					</View>
					<View style={styles.cardCell}>
						<Text style={styles.cardLabel}>Celular</Text>
						<Text style={styles.cardValue}>{usuario.celular}</Text>
					</View>
				</View>
				<View style={styles.cardLine}>
					<View style={styles.cardCell}>
						<Text style={styles.cardLabel}>Email</Text>
						<Text style={styles.cardValue}>{usuario.email}</Text>
					</View>
				</View>
				<View style={styles.cardLine}>
					<View style={styles.cardCell}>
						<Text style={styles.cardLabel}>Cidade</Text>
						<Text style={styles.cardValue}>{usuario.endereco.cidade.descricao}</Text>
					</View>
					<View style={styles.cardCell}>
						<Text style={styles.cardLabel}>Bairro</Text>
						<Text style={styles.cardValue}>{usuario.endereco.bairro}</Text>
					</View>
				</View>
				{usuario.tipo_usuario === TipoUsuario.PET_SITTER &&
					<>
						<View style={styles.divider} />
						<View>
							<Text style={styles.cardLabel}>Sobre mim</Text>
							<Text style={styles.cardValue}>{usuario.descricao}</Text>
						</View>
					</>
				}
			</View>
			<View style={{height: 60}}/>
		</ScrollView>
	);
}
