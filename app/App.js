import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ToolbarAndroid,
  Platform
} from 'react-native';
import List from './List';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style={styles.statusbar} barStyle="light-content" />
        <ToolbarAndroid
          style={styles.toolbar}
          titleColor="white"
          title="Watering"
        />
        <List></List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87c0f2'
  },
  statusbar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  },
  toolbar: {
    width: '100%',
    height: 56,
    backgroundColor: '#2d88d8'
  }
});
