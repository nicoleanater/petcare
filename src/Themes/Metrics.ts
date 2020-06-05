import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    smallMargin: 5,
    margin: 10,
    doubleMargin: 20,
    bigMargin: 30,
    section: 25,
    doubleSection: 50,
    buttonPadding: 35,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? 64 : 54,
    inputHeight: 52,
    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 50
    },
    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 200
    }
};