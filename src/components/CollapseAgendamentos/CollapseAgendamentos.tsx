import moment from 'moment-timezone';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Agendamento } from '../../models/Agendamento';
import { updateAgendamento } from '../../services/compromisso';
import { TimerBadge } from '../TimerBadge/TimerBadge';
import styles from './CollapseAgendamentosStyles';

interface IProps {
	idCompromisso: number;
	agendamentos: Array<Agendamento>;
	updateAgendamentos: (agendamentos: Array<Agendamento>) => void;
}

interface IState {
	agendamentoIsCollapsed: Array<boolean>;
	agendamentoTimers: Array<number>;
	timersStatuses: Array<'initial' | 'playing' | 'finished'>;
}

export const CollapseAgendamentos: FunctionComponent<IProps> = ({ idCompromisso, agendamentos, updateAgendamentos }) => {
	const clockCallRef = useRef(agendamentos.map((item, i) => null));

	const initialState: IState = {
		agendamentoIsCollapsed: agendamentos.map((item, i) => i === 0 ? false : true),
		agendamentoTimers: agendamentos.map((item, i) => {
			let seconds = 0;
			if (item.hora_inicio != null && item.hora_fim != null) {
				const startTime = moment(`${item.hora_inicio}`, 'YYYY-MM-DDTHH:mm:ss');
				const endTime = moment(`${item.hora_fim}`, 'YYYY-MM-DDTHH:mm:ss');
				const duration = moment.duration(endTime.diff(startTime));
				seconds = duration.asSeconds();
			} else if (item.hora_inicio != null) {
				const startTime = moment(`${item.hora_inicio}`, 'YYYY-MM-DDTHH:mm:ss').format();
				const nowString = moment().tz('America/Sao_Paulo').format();
				const now = moment(nowString, 'YYYY-MM-DDTHH:mm:ss');
				const duration = moment.duration(now.diff(startTime));
				seconds = duration.asSeconds();
			}

			return seconds;
		}),
		timersStatuses: agendamentos.map((item, i) => {
			if (item.hora_inicio != null && item.hora_fim != null) {
				return 'finished';
			} else if (item.hora_inicio != null) {
				return 'playing';
			}
			return 'initial';
		})
	};
	const [agendamentoIsCollapsed, setAgendamentoIsCollapsed] = useState(initialState.agendamentoIsCollapsed);
	const [agendamentoTimers, setAgendamentoTimers] = useState(initialState.agendamentoTimers);
	const [timersStatuses, setTimersStatuses] = useState(initialState.timersStatuses);

	useEffect(() => {
		agendamentoTimers.forEach((timer, i) => {
			console.log(timer);
			if (timer > 0 && timersStatuses[i] == 'playing') {
				clockCallRef.current[i] = setInterval(() => {
					setAgendamentoTimers((previousState) => {
						return Object.assign([], previousState, { [i]: previousState[i] + 1 });
					})
				}, 1000);
			}
		})
	}, [])

	const onCollapseHeaderPressed = (index: number) => {
		setAgendamentoIsCollapsed((previousState) => {
			(previousState);
			const newState = Object.assign([], previousState, { [index]: !previousState[index] });
			return newState;
		})
	}

	const startTimer = async (index: number) => {
		clockCallRef.current[index] = setInterval(() => {
			setAgendamentoTimers((previousState) => {
				return Object.assign([], previousState, { [index]: previousState[index] + 1 });
			})
		}, 1000);

		const newAgendamento: Agendamento = {
			id_agendamento: agendamentos[index].id_agendamento,
			hora_inicio: moment.tz('America/Sao_Paulo').format()
		}

		const res = await updateAgendamento(idCompromisso, newAgendamento);
		updateAgendamentos(Object.assign([], agendamentos, { [index]: res.data }));

	}

	const stopTimer = async (index: number) => {
		clearInterval(clockCallRef.current[index]);

		const newAgendamento: Agendamento = {
			id_agendamento: agendamentos[index].id_agendamento,
			hora_fim: moment.tz('America/Sao_Paulo').format()
		}

		const res = await updateAgendamento(idCompromisso, newAgendamento);
		updateAgendamentos(Object.assign([], agendamentos, { [index]: res.data }));
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

	const formatTimeCounter = (time: number) => {
		return moment("2015-01-01").startOf('day')
    .seconds(time)
    .format('HH:mm:ss');
	}

	const formatTimeStatic = (hora_inicio: string, hora_fim: string) => {
		const inicio = hora_inicio != null ? moment(hora_inicio, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm') : '--:--';
		const fim = hora_fim != null ? moment(hora_fim, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm') : '--:--';
		return `${inicio} / ${fim}`;
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
							<Text style={styles.collapseContentText}>{formatTimeStatic(agendamento.hora_inicio, agendamento.hora_fim)}</Text>
							<TimerBadge index={i} status={timersStatuses[i]} time={formatTimeCounter(agendamentoTimers[i])} onPress={onTimerBadgePressed} />
						</Collapsible>
					</View>
				))}
			</View>
		</>
	);
};
