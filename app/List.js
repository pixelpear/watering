import React from 'react';
import { FlatList, View } from 'react-native';
import ListItem from './ListItem';
import { RRule } from 'rfc5545-rrule';

export default class List extends React.Component {
  render() {
    return (
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={[
          {
            key: 0,
            name: 'Violet',
            type: 'Orchid',
            schedule: 'every 4 days',
            photo: require('../img/photo.jpg'),
            nextWatering: 'today'
          },
          {
            key: 1,
            name: 'White',
            type: 'Orchid',
            schedule: 'every 4 days',
            photo: require('../img/photo.jpg'),
            nextWatering: 'in 2 days'
          }
        ]}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            type={item.type}
            schedule={item.schedule}
            photo={item.photo}
            nextWatering={item.nextWatering}
          />
        )}
      />
    );
  }
}

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 0.5,
        backgroundColor: '#a9abad',
        flex: 1
      }}
    />
  );
};
