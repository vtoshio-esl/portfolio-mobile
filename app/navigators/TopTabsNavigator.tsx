import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "react-native-paper";

import { FrontendScreen } from "../screens/FrontendScreen";
import { BackendScreen } from "../screens/BackendScreen";
import type { AppTheme } from "../themes/PaperTheme";

export type SkillsTabsParamList = {
    frontend: undefined,
    backend: undefined
}

const { Navigator, Screen } = createMaterialTopTabNavigator<SkillsTabsParamList>()

export const SkillsTabsNavigator = () => {
    const theme = useTheme<AppTheme>();

    return (
        <Navigator
            initialRouteName="frontend"
            screenOptions={{
                sceneStyle: {
                    backgroundColor: theme.colors.background,
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.secondary200,
                },
                tabBarActiveTintColor: theme.colors.primary100,
                tabBarInactiveTintColor: theme.colors.primary300,
                tabBarIndicatorStyle: {
                    backgroundColor: theme.colors.primary100,
                    height: 3,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: '700',
                    textTransform: 'none',
                },
                tabBarPressColor: theme.colors.secondary100,
            }}
        >
            <Screen
                name='frontend'
                component={FrontendScreen}
                options={{ title: 'Front-end' }}
            />
            <Screen
                name='backend'
                component={BackendScreen}
                options={{ title: 'Back-end' }}
            />
        </Navigator>
    )
}
