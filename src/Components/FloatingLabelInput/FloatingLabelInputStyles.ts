import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
    ...ApplicationStyles,

    // input general styles
    floatingLabelStyle: {
        justifyContent: 'flex-end',
				height: 52,
				backgroundColor: Colors.white,
				borderRadius: 71,
				paddingBottom: 5,
				paddingHorizontal: 20,
				marginBottom: responsiveHeight(3),
				elevation: 2
    } as ViewStyle,
    inputStyle: {
				fontFamily: Fonts.fontFamilies.latoLight,
				color: Colors.blackTwo,
				fontSize: Fonts.sizes.big,
				textAlignVertical: 'center',
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        margin: 0,
        paddingVertical: 0,
    } as ViewStyle,
    inputContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        paddingRight: 5
    } as ViewStyle,
    iconStyle: {
				position: 'absolute',
				top: 16,
				left: 20,
				color: Colors.grayFour,
				fontSize: Fonts.sizes.icon
    } as ViewStyle,

    // label general styles
    labelStyle: {
        position: 'absolute'
    },
    labelStyleBlur: {
        fontSize: Fonts.sizes.big,
        bottom: 8
    } as TextStyle,
    labelStyleFocused: {
        fontSize: Fonts.sizes.small,
        bottom: 30
    },

    // label styles light
    // labelColorLight: Colors.barney_purple,
    // labelColorErrorLight: Colors.tangerine,

    // label styles dark
    // labelColorDark: Colors.lavender,
    // labelColorErrorDark: Colors.butterscotch,

    // border styles light
    borderInactiveLight: {
        // borderBottomColor: Colors.light_periwinkle
    },
    borderActiveLight: {
        // borderBottomColor: Colors.barney_purple
    },
    borderErrorLight: {
        // borderBottomColor: Colors.tangerine
    },

    // border styles dark
    borderInactiveDark: {
        // borderBottomColor: Colors.medium_purple
    },
    borderActiveDark: {
        borderBottomColor: Colors.white
    },
    borderErrorDark: {
        // borderBottomColor: Colors.butterscotch
    }
};