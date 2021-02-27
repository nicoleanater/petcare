import { ViewStyle, TextStyle } from "react-native";
import { Colors, Metrics } from "../themes";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default {
		// global styles
		fullContainer: {
			width: '100%',
			height: '100%'
	} as ViewStyle,
		fullWidthContainer: {
			width: '100%',
	} as ViewStyle,

    // regular padding
    padding: {
        padding: responsiveWidth(8)
    } as ViewStyle,
    paddingVertical: {
        paddingVertical: responsiveWidth(8)
    } as ViewStyle,
    paddingHorizontal: {
        paddingHorizontal: responsiveWidth(8)
    } as ViewStyle,
    paddingBottom: {
        paddingBottom: responsiveWidth(8)
    } as ViewStyle,
    paddingTop: {
        paddingTop: responsiveWidth(8)
    } as ViewStyle,
    paddingLeft: {
        paddingLeft: responsiveWidth(8)
    } as ViewStyle,
    paddingRight: {
        paddingRight: responsiveWidth(8)
    } as ViewStyle,

    // medium padding
    mediumPadding: {
        padding: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingVertical: {
        paddingVertical: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingHorizontal: {
        paddingHorizontal: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingBottom: {
        paddingBottom: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingTop: {
        paddingTop: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingLeft: {
        paddingLeft: responsiveWidth(5)
    } as ViewStyle,
    mediumPaddingRight: {
        paddingRight: responsiveWidth(5)
    } as ViewStyle,

    // small padding
    smallPadding: {
        padding: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingVertical: {
        paddingVertical: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingHorizontal: {
        paddingHorizontal: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingBottom: {
        paddingBottom: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingTop: {
        paddingTop: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingLeft: {
        paddingLeft: responsiveWidth(3)
    } as ViewStyle,
    smallPaddingRight: {
        paddingRight: responsiveWidth(3)
    } as ViewStyle,

    // xSmall padding
    xSmallPadding: {
        padding: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingVertical: {
        paddingVertical: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingHorizontal: {
        paddingHorizontal: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingBottom: {
        paddingBottom: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingTop: {
        paddingTop: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingLeft: {
        paddingLeft: responsiveWidth(1)
    } as ViewStyle,
    xSmallPaddingRight: {
        paddingRight: responsiveWidth(1)
    } as ViewStyle,

    // regular margin
    margin: {
        margin: responsiveWidth(8)
    } as ViewStyle,
    marginVertical: {
        marginVertical: responsiveWidth(8)
    } as ViewStyle,
    marginHorizontal: {
        marginHorizontal: responsiveWidth(8)
    } as ViewStyle,
    marginBottom: {
        marginBottom: responsiveWidth(8)
    } as ViewStyle,
    marginTop: {
        marginTop: responsiveWidth(8)
    } as ViewStyle,
    marginLeft: {
        marginLeft: responsiveWidth(8)
    } as ViewStyle,
    marginRight: {
        marginRight: responsiveWidth(8)
    } as ViewStyle,

    // medium margin
    mediumMargin: {
        margin: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginVertical: {
        marginVertical: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginHorizontal: {
        marginHorizontal: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginBottom: {
        marginBottom: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginTop: {
        marginTop: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginLeft: {
        marginLeft: responsiveWidth(5)
    } as ViewStyle,
    mediumMarginRight: {
        marginRight: responsiveWidth(5)
    } as ViewStyle,

    // small margin
    smallMargin: {
        margin: responsiveWidth(3)
    } as ViewStyle,
    smallMarginVertical: {
        marginVertical: responsiveWidth(3)
    } as ViewStyle,
    smallMarginHorizontal: {
        marginHorizontal: responsiveWidth(3)
    } as ViewStyle,
    smallMarginBottom: {
        marginBottom: responsiveWidth(3)
    } as ViewStyle,
    smallMarginTop: {
        marginTop: responsiveWidth(3)
    } as ViewStyle,
    smallMarginLeft: {
        marginLeft: responsiveWidth(3)
    } as ViewStyle,
    smallMarginRight: {
        marginRight: responsiveWidth(3)
    },

    // xSmall margin
    xSmallMargin: {
        margin: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginVertical: {
        marginVertical: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginHorizontal: {
        marginHorizontal: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginBottom: {
        marginBottom: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginTop: {
        marginTop: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginLeft: {
        marginLeft: responsiveWidth(1)
    } as ViewStyle,
    xSmallMarginRight: {
        marginRight: responsiveWidth(1)
    } as ViewStyle,

    // flex-direction
    row: {
        flexDirection: 'row'
    } as ViewStyle,
    column: {
        flexDirection: 'column'
    } as ViewStyle,

    // justify-content
    spaceBetween: {
        justifyContent: 'space-between'
    } as ViewStyle,
    spaceAround: {
        justifyContent: 'space-around'
    } as ViewStyle,

    // common alignments
    upAlignedRow: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    } as ViewStyle,
    botAlignedRow: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    } as ViewStyle,

    verticalCenterAlignedRow: {
        flexDirection: 'row',
        alignItems: 'center'
    } as ViewStyle,

    leftAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    } as ViewStyle,
    rightAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    } as ViewStyle,
    horizontalCenterAlignedRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    } as ViewStyle,

    upAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    } as ViewStyle,
    botAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    } as ViewStyle,
    verticalCenterAlignedColumn: {
        flexDirection: 'column',
        justifyContent: 'center'
    } as ViewStyle,
    leftAlignedColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    } as ViewStyle,
    rightAlignedColumn: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    } as ViewStyle,

		alignSelfStart: {
			alignSelf: 'flex-start',
		} as ViewStyle,
		alignSelfCenter: {
			alignSelf: 'center',
		} as ViewStyle,
		alignSelfEnd: {
			alignSelf: 'flex-end',
		} as ViewStyle,

}