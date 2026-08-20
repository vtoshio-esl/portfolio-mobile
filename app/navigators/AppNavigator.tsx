import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppNativeStackParamList } from "./AppNativeStackParamList";
import { HomeScreen } from "../screens/HomeScreen";
import { SkillsScreen } from "../screens/SkillsScreen";

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
                component={SkillsScreen} 
            />
        </NativeStack.Navigator>

    );
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppNativeStack />
        </NavigationContainer>       
    )
}