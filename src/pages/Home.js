import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

@observer
export default class Home extends React.Component {
  static contextTypes = {
    navigator: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  render() {
    const { store } = this.context;
    return (
      <View style={styles.container}>
        <Text>{store.timer}</Text>
        <Text onPress={store.addTimer}>+</Text>
        <Text onPress={store.subTimer}>-</Text>
      </View>
    )
  }
}
