/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let DeviceWidth = Dimensions.get('window').width;
  let DeviceHeight = Dimensions.get('window').height;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'powderblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'skyblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'steelblue',
            }}
          />
        </View>
        <View>
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'powderblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'skyblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'steelblue',
            }}
          />
        </View>
        <View>
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'powderblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'skyblue',
            }}
          />
          <View
            style={{
              width: DeviceWidth * 0.2,
              height: DeviceWidth * 0.2,
              marginBottom: 10,
              marginLeft: 10,
              backgroundColor: 'steelblue',
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
