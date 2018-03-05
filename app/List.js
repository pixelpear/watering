import React from 'react';
import { FlatList, View } from 'react-native';
import ListItem from './ListItem';

export default class List extends React.Component {
  render() {
    return (<FlatList 
              ItemSeparatorComponent={ItemSeparator} 
              data={[
                {
                  key: 0,
                  name: 'Violet', 
                  lastWatering: '1519998844', 
                  type: 'Orchid', 
                  schedule: 'RRULE:FREQ=DAYLY;INTERVAL=4;'
                }, 
                {
                  key: 1,
                  name: 'White', 
                  lastWatering: '1520260888', 
                  type: 'Orchid', 
                  schedule: 'RRULE:FREQ=DAYLY;INTERVAL=4;'
                }
              ]} 
              renderItem={({ item }) => (
                <ListItem
                  name={item.name}
                  lastWatering={item.lastWatering}
                  type={item.type}
                  schedule={item.schedule}
                />
              )}
            />
    )
  }
}

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: 'black',
        flex: 1
      }}
    />
  );
};
