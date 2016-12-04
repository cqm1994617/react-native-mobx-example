import React from 'react';
import {
  Navigator,
} from 'react-native';

import NavigatorContainer from './components/NavigatorContainer'
import Home from './pages/Home';

const initRoute = {
  component: Home,
};

export default class App extends React.Component {

  configScene = (route) => {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.PushFromRight;
  };

  renderScene = (route, navigator) => {
    const Component = route.component;
    return (
      <NavigatorContainer navigator={navigator}>
        <Component {...route.params}/>
      </NavigatorContainer>
    );
  };

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={initRoute}
        configureScene={this.configScene}
        renderScene={this.renderScene}
      />
    );
  }
}
