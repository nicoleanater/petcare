import { responsiveFont } from '../utils/FontUtils'

const sizes = {
	xSmall: responsiveFont(10),
	small: responsiveFont(12),
	regular: responsiveFont(14),
	big: responsiveFont(16),
	icon: 20,
	giant: responsiveFont(24),
	logo: responsiveFont(28)
};

const fontFamilies = {
	latoLight: 'Lato Light',
	latoRegular: 'Lato Regular',
	latoBold: 'Lato Bold',
	latoBlack: 'Lato Black'
}

export default {
    fontFamilies,
    sizes,
};