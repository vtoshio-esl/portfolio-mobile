import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppNativeStackParamList } from "./AppNativeStackParamList";
import { HomeScreen } from "../screens/HomeScreen";
import { SkillsTabsNavigator } from "./TopTabsNavigator";
import { navigationTheme } from "../themes/PaperTheme";

export type AppStackScreenProps<T extends keyof AppNativeStackParamList> = NativeStackScreenProps<
    AppNativeStackParamList, 
    T
>
const NativeStack = createNativeStackNavigator<AppNativeStackParamList>();

const AppNativeStack = () => {
    return (
        <NativeStack.Navigator
            id="AppNativeStack"
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="home"
        >
            <NativeStack.Screen 
                name="home"   
                component={HomeScreen}
            />
            <NativeStack.Screen 
                name="skills" 
                component={SkillsTabsNavigator}
            />
        </NativeStack.Navigator>
    );
}

export const AppNavigator = () => {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNativeStack />
        </NavigationContainer>       
    )
}