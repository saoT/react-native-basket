import React, { Component } from 'react';
import { Container, Header, Text } from 'native-base';

import Item from './Item';

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
        {
          data.map( (item, i) => {
            return <Item key={i} item={item}></Item>
          })
        }
      </Container>
    )
  }
}
