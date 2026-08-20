import { AppNavigator } from './navigators/AppNavigator';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';

import { PaperTheme } from './themes/PaperTheme';

export default function Main() {
  return (
    <PaperProvider theme={PaperTheme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator />
          <FlashMessage position='top'/>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
