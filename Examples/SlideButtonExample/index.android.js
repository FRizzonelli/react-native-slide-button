/**
 * Slide Button Example App
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { SlideButton, SlideDirection } from 'react-native-slide-button';

var Dimensions = require('Dimensions');
var SCREEN_WIDTH = Dimensions.get('window').width;

class SlideButtonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiped: false,
      leftButtonText: "Slide Left To Proceed",
      rightButtonText: "Slide Right To Proceed",
    };
  }

  onLeftSlide() {
    var self = this;
    var oldButtonText = this.state.leftButtonText;
    this.setState({leftButtonText: "Slide Successful!"}, () => {
      setTimeout(() => self.setState({leftButtonText: oldButtonText}));
    }, 1000);
  }

  onRightSlide() {
    var self = this;
    var oldButtonText = this.state.rightButtonText;
    this.setState({leftButtonText: "Slide Successful!"}, () => {
      setTimeout(() => self.setState({rightButtonText: oldButtonText}));
    }, 1000);
  }

  render() {
    var message = (
        <Text style={{paddingBottom: 20, color: '#0FACF3'}}>
          Please Slide Button
        </Text>
    );

    if (this.state.swiped) {
      message = (
          <Text style={{paddingBottom: 20, color: 'green'}}>
            Slide Success!
          </Text>
      );
    }

    return (
      <View style={styles.container}>
        <View>
          {message}
        </View>

        <View style={styles.buttonOuter}>
          <SlideButton onSlideSuccess={this.onRightSlide.bind(this)}>
            <View style={styles.buttonInner}>
              <Text style={styles.button}>{this.state.rightButtonText}</Text>
            </View>
          </SlideButton>
        </View>

        <View style={styles.buttonOuter}>
          <SlideButton onSlideSuccess={this.onLeftSlide.bind(this)}
           slideDirection={SlideDirection.LEFT}>
            <View style={styles.buttonInner}>
              <Text style={styles.button}>{this.state.leftButtonText}</Text>
            </View>
          </SlideButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  buttonOuter: {
    backgroundColor: '#0FACF3',
    height: 50,
    width: SCREEN_WIDTH-40
  },
  buttonInner: {
    width: SCREEN_WIDTH-40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'white',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('SlideButtonExample', () => SlideButtonExample);
