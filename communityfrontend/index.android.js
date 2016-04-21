/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './app';

class communityfrontend extends Component {
    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('communityfrontend', () => communityfrontend);
