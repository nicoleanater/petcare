import moment from 'moment';
import React, { FunctionComponent, useState } from 'react';
import { Text, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Agendamento } from '../../models/Agendamento';
import styles from './CollapseAgendamentosStyles';

interface IProps {
	agendamentos?: Array<Agendamento>;
}

interface IState {
	agendamentoIsCollapsed: Array<boolean>;
}

export const CollapseAgendamentos: FunctionComponent<IProps> = ({ agendamentos }) => {
	const initialState: IState = {
		agendamentoIsCollapsed: agendamentos.map(() => false)
	};
	const [agendamentoIsCollapsed, setAgendamentoIsCollapsed] = useState(initialState.agendamentoIsCollapsed);

	const onCollapseHeaderPressed = (index: number) => {
		setAgendamentoIsCollapsed((previousState) => {
			console.log(previousState);
			const newState = Object.assign([], previousState, {[index]: !previousState[index]});
			return newState;
		})
	}

	return (
		<>
			<Text style={styles.text.cardTitleText}>Agendamentos</Text>
			<View style={styles.mainContainer}>
				{agendamentos.map((agendamento, i) => (
					<View key={i}>
						<TouchableWithoutFeedback onPress={() => onCollapseHeaderPressed(i)} style={styles.collapseHeader}>
							<Icon name={'today'} style={styles.calendarIconStyle} size={20}/>
							<Text style={styles.collapseHeaderText}>{moment(agendamento.data, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
							<Icon name={'keyboard-arrow-down'} style={styles.arrowIconStyle} size={25}/>
						</TouchableWithoutFeedback>
						<Collapsible collapsed={agendamentoIsCollapsed[i]} style={[styles.collapseContent, i === agendamentos.length-1 && {borderBottomWidth: 0}]}>
							<Text style={styles.collapseContentText}>{`13:34 / 14:28`}</Text>
							<View>
								<Text>Time view</Text>
							</View>
						</Collapsible>
					</View>
				))}
			</View>
		</>
	);
};
