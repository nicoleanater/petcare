import moment from 'moment';
import React, { FunctionComponent, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Agendamento } from '../../models/Agendamento';
import { TimerBadge } from '../TimerBadge/TimerBadge';
import styles from './CollapseAgendamentosStyles';

interface IProps {
	agendamentos?: Array<Agendamento>;
}

interface IState {
	agendamentoIsCollapsed: Array<boolean>;
	agendamentoTimers: Array<number>;
	timersStatuses: Array<'initial' | 'playing' | 'finished'>;
}

export const CollapseAgendamentos: FunctionComponent<IProps> = ({ agendamentos }) => {
	const clockCallRef = useRef(agendamentos.map((item, i) => null));

	const initialState: IState = {
		agendamentoIsCollapsed: agendamentos.map((item, i) => i === 0 ? false : true),
		agendamentoTimers: agendamentos.map((item, i) => 0), // update to display difference between already set and now
		timersStatuses: agendamentos.map((item, i) => 'initial') // update to conditionally set depending on time already set
	};
	const [agendamentoIsCollapsed, setAgendamentoIsCollapsed] = useState(initialState.agendamentoIsCollapsed);
	const [agendamentoTimers, setAgendamentoTimers] = useState(initialState.agendamentoTimers);
	const [timersStatuses, setTimersStatuses] = useState(initialState.timersStatuses);

	const onCollapseHeaderPressed = (index: number) => {
		setAgendamentoIsCollapsed((previousState) => {
			console.log(previousState);
			const newState = Object.assign([], previousState, { [index]: !previousState[index] });
			return newState;
		})
	}

	const startTimer = (index: number) => {
		console.log({test: moment().format()});

		clockCallRef.current[index] = setInterval(() => {
			setAgendamentoTimers((previousState) => {
				return Object.assign([], previousState, { [index]: previousState[index] + 1 });
			})
		}, 1000);
	}

	const stopTimer = (index: number) => {
		clearInterval(clockCallRef.current[index]);
	}

	const onTimerBadgePressed = (index: number) => {
		if (timersStatuses[index] === 'initial') {
			startTimer(index);
			setTimersStatuses((previousState) => {
				return Object.assign([], previousState, { [index]: 'playing' });
			})
		} else if (timersStatuses[index] === 'playing') {
			stopTimer(index);
			setTimersStatuses((previousState) => {
				return Object.assign([], previousState, { [index]: 'finished' });
			})
		}

	}

	const formatTime = (time: number) => {
		return moment("2015-01-01").startOf('day')
    .seconds(time)
    .format('HH:mm:ss');
	}

	return (
		<>
			<Text style={styles.text.cardTitleText}>Agendamentos</Text>
			<View style={styles.mainContainer}>
				{agendamentos.map((agendamento, i) => (
					<View key={i}>
						<TouchableWithoutFeedback onPress={() => onCollapseHeaderPressed(i)} style={styles.collapseHeader}>
							<Icon name={'today'} style={styles.calendarIconStyle} size={20} />
							<Text style={styles.collapseHeaderText}>{moment(agendamento.data, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
							<Icon name={'keyboard-arrow-down'} style={styles.arrowIconStyle} size={25} />
						</TouchableWithoutFeedback>
						<Collapsible collapsed={agendamentoIsCollapsed[i]} style={[styles.collapseContent, i === agendamentos.length - 1 && { borderBottomWidth: 0 }]}>
							<Text style={styles.collapseContentText}>{`13:34 / 14:28`}</Text>
							<TimerBadge index={i} status={timersStatuses[i]} time={formatTime(agendamentoTimers[i])} onPress={onTimerBadgePressed} />
						</Collapsible>
					</View>
				))}
			</View>
		</>
	);
};
