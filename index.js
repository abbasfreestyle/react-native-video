import { AppRegistry, LogBox } from 'react-native';

import { name as appName } from './app.json';
import { AppWithNavigator } from './src/navigation/AppNavigator';

LogBox.ignoreLogs([/core-js/g, /removeListener/g]);

AppRegistry.registerComponent(appName, () => AppWithNavigator);
