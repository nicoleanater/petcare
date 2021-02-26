import { Picker } from '@react-native-picker/picker';
import React, { useEffect, FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './CustomPickerStyles';

export interface Option<T> {
	label: string;
	value: T & { id: number };
}

interface IProps<T> {
  onSelect: (value: T) => void;
	value: T & { id: number };
	list: Array<Option<T>>;
}



export function CustomPicker<T>({ onSelect, value, list }: IProps<T> & { children?: React.ReactNode }): React.ReactElement {
		const onValueChange = (itemValue: number) => {
			const selectedItem = list.find((item => item.value.id === itemValue))
			onSelect(selectedItem.value)
		}

    return (
			<View style={styles.pickerContainer}>
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
			
    );
};
