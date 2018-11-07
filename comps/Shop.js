import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Text } from 'native-base';

import Item from './Item';
import Cart from './Cart';

import data from './data.json';

export default class Shop extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Text>
            My awesome app !
          </Text>
        </Header>
        <ScrollView>
          <Cart>
          </Cart>
          {
            data.map( (item, i) => {
              return <Item key={i} item={item}></Item>
            })
          }
        </ScrollView>
      </Container>
    )
  }
}
