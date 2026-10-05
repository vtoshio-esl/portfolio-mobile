import { DefaultTheme, Theme } from "@react-navigation/native";
import { MD3LightTheme, adaptNavigationTheme } from "react-native-paper";

export const PaperTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary100: '#EEF6FC',
        primary200: '#CBE5F6',
        primary300: '#97CAED',
        primary400: '#63B0E3',

        secondary100: '#3498DB',
        secondary200: '#2280BF',
        secondary300: '#185D8B',
        secondary400: '#0F3A57',
        
        yellow: '#FFED29',
        background: '#EEF6FC'
    }
};

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  materialLight: PaperTheme,
});

export const navigationTheme: Theme = {
    ...DefaultTheme,
    ...LightTheme
}

export type AppTheme = typeof PaperTheme;