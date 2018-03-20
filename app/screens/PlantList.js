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
import FAB from 'react-native-fab';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
        <FAB
          buttonColor="#2d88d8"
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            console.log('FAB pressed');
          }}
          visible={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
