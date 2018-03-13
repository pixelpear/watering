import React from 'react';
import { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

export default class ListItem extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100, margin: 10 }}
          source={this.props.photo}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            margin: 5,
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 18 }}>{this.props.name}</Text>
          <Text style={{ fontSize: 12 }}>{this.props.type}</Text>
          <HorisontalContainer>
            <Text style={{ fontSize: 18 }}>Next watering is </Text>
            <Text style={{ fontSize: 18 }}>{this.props.nextWatering}</Text>
          </HorisontalContainer>
          <HorisontalContainer style={{ marginTop: -50 }}>
            <Text style={{ fontSize: 15 }}>Watering </Text>
            <Text style={{ fontSize: 15 }}>{this.props.schedule}</Text>
          </HorisontalContainer>
        </View>
      </View>
    );
  }
}

const HorisontalContainer = props => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row'
    }}
  >
    {props.children}
  </View>
);
