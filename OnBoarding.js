import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import styles from "./Styles"


type Props = {};
export default class OnBoarding extends Component<Props> {

    onPress() {

    }
  render() {
    return (
      <View style={styles.container}>
      <Image
          source={require('./assets/images/1.png')}
        />
        <Text style={styles.welcome}>Reminders made simple</Text>
        <Text style={styles.instructions}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque erat in blandit luctus.</Text>
        <View style={{backgroundColor: "#39A801", borderRadius: 10, width: 258, marginTop: 70}}>
            <Button
                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}
                title="Get Started"
                color="white"
            />
        </View>

      </View>
    );
  }
}
