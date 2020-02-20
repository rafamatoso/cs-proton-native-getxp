import React, { Component } from 'react'; // import from react

import { Window, App, View, Text } from 'proton-native'; // import the proton-native components

export default class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 500, height: 500, backgroundColor: 'black' }}>
          <View
            style={{
              height: 500,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{ color: 'purple', fontWeigth: 'bold', fontSize: 30 }}>
              Get XP
            </Text>
          </View>
        </Window>
      </App>
    );
  }
}
