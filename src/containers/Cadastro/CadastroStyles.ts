import PixelStyles from 'react-native-pixel-styles';
const ApplicationStyles = PixelStyles.pixelThemeStore.styles
const Colors = PixelStyles.Colors

export default {
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts
};
