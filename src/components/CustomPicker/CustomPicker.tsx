import { Picker } from '@react-native-picker/picker';
import React, { useEffect, FunctionComponent } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import styles from './CustomPickerStyles';
import _ from 'lodash';

export type EnumPicker = { id: string, descricao: string }
export interface Option<T> {
	label: string;
	value: T & { id: number | string };
}

interface IProps<T> {
	label: string;
  onSelect: (value: T | null) => void;
	value: T & { id: number | string };
	list: Array<Option<T>>;
	error?: string | null;
	mainContainerStyle?: ViewStyle[] | ViewStyle;
}

export function transformArrayIntoPickerOptions<T>(values: Array<T>, valueLabelKey: string) {
	return values.map((item: T) => ({
		label: item[valueLabelKey],
		value: item
	}))
}

export function CustomPicker<T>({ label, onSelect, value, list, error, mainContainerStyle }: IProps<T> & { children?: React.ReactNode }): React.ReactElement {
		const onValueChange = (itemValue: number | string | null) => {
			if (itemValue == null) {
				onSelect(itemValue as null);
			} else {
				const selectedItem = list.find((item => item.value.id === itemValue))
				onSelect(selectedItem.value)
			}
		}

    return (
			<View style={[styles.mainContainer, mainContainerStyle]}>
				<View style={[styles.pickerContainer, !_.isEmpty(error) && styles.pickerContainerError]}>
					<Picker
						style={styles.pickerStyle}
						selectedValue={value?.id}
						onValueChange={onValueChange}
					>
						<Picker.Item label={label} value={null} />
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
