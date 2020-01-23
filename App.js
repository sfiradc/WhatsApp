import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Button, Text, Content, Right, Icon, Tabs, Tab, TabHeading, Body, Badge } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Chat from './screens/chat'
import Camera from './screens/Camera'
import Status from './screens/Status'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}}>
        <Body>
          <text style={{fontWeight: "bold", color : "white", fontSize: 25}}>WhatsApp</text>
        </Body>
        <Right>
          <Button transparant>
            <Icon style={{fontSize:"25px"}} name="search"/>
          </Button>
          <Button transparant>
            <Icon style={{fontSize:"25px"}} name="more"/>
          </Button>
        </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Icon style={{fontSize:"20px"}} name="camera"/></TabHeading>}>
            <Camera/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>Chat</Text></TabHeading>}>
            <Chat/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>Status</Text></TabHeading>}>
            <Status/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text>Panggilan</Text></TabHeading>}>

          </Tab>
        </Tabs>

      </Container>
    );
  }
}
