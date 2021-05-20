import { registerRootComponent } from 'expo';

import App from './App';
import App1 from './App1';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App1);
