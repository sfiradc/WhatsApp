import React, { Component } from 'react';
import { Container, Header, Title, Tab, Tabs, TabHeading, View, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Separator } from 'native-base';

export default class ListAvatarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  render() {
    return (
      <View>
          <List>
            <ListItem avatar>
              <Thumbnail source= {require('../sdc.jpg')}/>
              <Body>
              <Text style={{fontWeight:'bold'}}>The Ugh 6</Text>
              <Text note>Bingung...</Text>
              </Body>
              <Text note>20.00 PM</Text>
            </ListItem>
            
            <ListItem avatar>
              <Thumbnail source= {require('../sdc.jpg')}/>
              <Body>
              <Text style={{fontWeight:'bold'}}>The Ugh 3</Text>
              <Text note>Apa ya?</Text>
              </Body>
              <Text note>10.00 PM</Text>
            </ListItem>

          </List>
      </View>
    );
  }
}