import React from 'react';
import {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class ListItem extends PureComponent {
  render () {
    return ( 
      <HorisontalContainer>
        <PlantName>{this.props.name}</PlantName>
        <View
          style={{
            flex: ListItem.textNumberRatio,
            flexDirection: 'column'
          }}
        >
          <Type>{this.props.type}</Type>
          <HorisontalContainer>
            <LastWatering>{this.props.lastWatering}</LastWatering>
            <Text style={{ marginRight: 5 }}>|</Text>
            <Schedule>{this.props.schedule}</Schedule>
          </HorisontalContainer>
        </View>
      </HorisontalContainer>
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

const LastWatering = props => (
  <Text
    style={{
      marginBottom: 10,
      marginRight: 5
    }}
  >
    {props.children}
  </Text>
);

const Schedule= props => (
  <Text
    style={{
      marginBottom: 10,
      marginRight: 5
    }}
  >
    {props.children}
  </Text>
);

const Type = props => (
  <Text
    style={{
      marginTop: 10,
      marginBottom: 5,
      fontSize: 17,
      color: '#ad4b0a'
    }}
  >
    {props.children}
  </Text>
);

const PlantName = props => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text
      style={{
        fontSize: 20
      }}
    >
      {props.children}
    </Text>
  </View>
);