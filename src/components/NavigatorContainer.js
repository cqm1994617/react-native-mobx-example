import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import TimerStore from '../store/TimerStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class NavigatorContainer extends React.Component {

  static propTypes = {
    navigator: React.PropTypes.object,
  };

  static childContextTypes = {
    navigator: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  getChildContext() {
    return {
      navigator: this.props.navigator,
      store: TimerStore,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}
