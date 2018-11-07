import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Left, Right, Text } from 'native-base';

const Item = (props) => {

  imgUrl = "https://source.unsplash.com/random";

 return (
  <Card>
    <CardItem>
      <Left>
        <Body>
          <Text>{props.item.name}</Text>
          <Text note>provenance</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={{uri: imgUrl}} style={{height: 200, width: null, flex: 1}}/>
    </CardItem>
    <CardItem>
      <Left>
        <Text>{props.item.price}</Text>
      </Left>
    </CardItem>
  </Card>
  )
}


export default Item;