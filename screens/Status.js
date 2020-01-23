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
            <ListItem thumbnail>
              <Thumbnail source= {require('../sdc.jpg')}/>
              <Body>
              <Text style={{fontWeight:'bold'}}>Status Saya</Text>
              <Text note>Ketuk untuk menambahkan pembaruan status...</Text>
              </Body>
            </ListItem>
            
            <Content style={{backgroundColor:'#ECE5DD'}}>
              <Separator bordered><Text style={{fontSize:'16px', color:'#403C3B'}}
              >Pembaruan terkini</Text>
              </Separator>
            </Content>
          </List>
      </View>
    );
  }
}