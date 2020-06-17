import { ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native';
import { Colors, ApplicationStyles, Fonts } from '../../Themes';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default {
    ...ApplicationStyles,

    // input general styles
    floatingLabelStyle: {
        justifyContent: 'flex-end',
        height: 55,
        paddingBottom: 5,
        borderBottomWidth: 1,
        marginBottom: responsiveHeight(3)
    } as ViewStyle,
    inputStyle: {
				// fontFamily: Fonts.defaultFont,
				fontSize: Fonts.sizes.big,
				color: Colors.black,
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
        height: 24,
        width: 24,
        resizeMode: 'contain'
    } as StyleProp<ImageStyle>,
    warningIconStyle: {
        position: 'absolute',
        right: 5
    } as ViewStyle,

    // input text theme styles
    inputTextLight: {
        // color: Colors.dark_grey
    },
    inputTextDark: {
        color: Colors.white
    },

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