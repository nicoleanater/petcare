import { Picker } from '@react-native-picker/picker';
import React, { useEffect, FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './CustomPickerStyles';
import _ from 'lodash';

export interface Option<T> {
	label: string;
	value: T & { id: number };
}

interface IProps<T> {
  onSelect: (value: T) => void;
	value: T & { id: number };
	list: Array<Option<T>>;
	error?: string | null;
}

export function transformArrayIntoPickerOptions<T extends {descricao: string}>(values: Array<T>) {
	return values.map((item: T) => ({
		label: item.descricao,
		value: item
	}))
}

export function CustomPicker<T>({ onSelect, value, list, error }: IProps<T> & { children?: React.ReactNode }): React.ReactElement {
		const onValueChange = (itemValue: number) => {
			const selectedItem = list.find((item => item.value.id === itemValue))
			onSelect(selectedItem.value)
		}

    return (
			<View style={styles.mainContainer}>
				<View style={[styles.pickerContainer, !_.isEmpty(error) && styles.pickerContainerError]}>
					<Picker
						style={styles.pickerStyle}
						selectedValue={value?.id}
						onValueChange={onValueChange}
					>
						{list.map((item: Option<T>, i) => {
							return (
								<Picker.Item label={item.label} value={item.value.id} key={i}/>
							)
						})}
					</Picker>
				</View>
				<Text style={styles.errorText}>{error}</Text>
			</View>
    );
};
