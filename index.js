import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { AppWithNavigator } from './src/navigation/AppNavigator';

AppRegistry.registerComponent(appName, () => AppWithNavigator);
