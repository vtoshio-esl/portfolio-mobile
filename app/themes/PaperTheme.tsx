import { DefaultTheme, Theme } from "@react-navigation/native";
import { MD3LightTheme, MD3Theme, adaptNavigationTheme } from "react-native-paper";

export const PaperTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        background: '#FDF0D5',
        primary: '#669BBC',
        primaryDark: '#003049',
        secondary: '#C1121F',
        secondaryDark: '#780000'
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