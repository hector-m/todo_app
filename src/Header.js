import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from "../Styles"

type Props = {};
export default class Header extends Component<Props> {
    render() {
        return (
            <ImageBackground source={require('./assets/images/header.png')} style={{width: '100%', height: 105,flexDirection: 'row', paddingBottom: 10, justifyContent: "center", alignItems: "flex-end"}}>
                <View style={{width: "90%", flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                    <View>
                        <Text style={styles.instructions, {color: "white"}}>Hello Hector</Text>
                        <Text style={styles.instructions, {color: "white", fontSize: 10}}>Today you have no tasks</Text>
                    </ View>
                    <Image
                        source={require('./assets/images/profile.jpg')}
                        style = {{margin: 0, width:40, height:40, borderRadius: 20}}
                    />
                </ View>
            </ImageBackground>
        );
    }
}
