import React, { Component } from 'react';
import { Container, Header, Content, Icon, List, ListItem, Button, Text } from 'native-base';

const mockPurchases = [
  {
    "name" : "blue",
    "price": 120,
    "qtt": 2
  },
  {
    "name" : "green",
    "price": 70,
    "qtt": 4
  }
]


export default class Cart extends Component {

  state = { display: false }

  toggle = () => {
    this.setState({display: !this.state.display})
  }

  render () {


    total = mockPurchases
      .map( p => p.qtt ? p.qtt * p.price : 0)
      .reduce( (total, add) => total + add );

    cartList = this.state.display ? (
      <Container>
        <Content>
          <List>
            {
              
              mockPurchases
                .filter ( p => (p.qtt && p.qtt > 0) )
                .map( (p, i) => <ListItem key={i}><Text> {p.name} : {p.qtt}  </Text></ListItem>)
            }
          </List>
          <Text>Total : {total}</Text>
        </Content>
      </Container>
    ) : null;

    return (
      <Container>
        <Button transparent onPress={this.toggle}>
          <Text>ICON</Text>
        </Button>
        {cartList}
      </Container>
    )
  }
}