import { useEffect, useState } from 'react';
import en from './{{pascalCase name}}_En_Us';
import pt from './{{pascalCase name}}_Pt_Br';
import { useTranslation } from 'react-native-pixel-translation';

const languages = {
    pt: pt,
    en: en,
    default: pt
};

export function use{{ pascalCase name }}Translation () {

    const { I18n, setLanguage } = useTranslation<typeof languages.pt>(languages)

    return { I18n, setLanguage }
}

export default use{{ pascalCase name }}Translation

