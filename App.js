/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import styles from "./Styles"
import OnBoarding from "./src/OnBoarding"
import Home from "./src/Home"
import Header from "./src/Header";
import Routes from "./src/Routes";


type Props = {};
export default class App extends Component<Props> {

    onPress() {

    }
  render() {
    return (
        <View style= {{flex:1, backgroundColor:"blue"}}>
        <Header />
        <Routes />
        </ View>

    );
  }
}
