import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import styles from "./Styles";

type Props = {};
export default class Home extends Component<Props> {

    onPress() {

    }
  render() {
    return (
      <View style={styles.container}>
          <Image
                source={require('./assets/images/emptyBoard.png')}
                style = {{marginBottom: 70}}
            />
            <Text style={styles.welcome}>No Tasks</Text>
            <Text style={styles.instructions}>You have no tasks to do.</Text>

      </View>
    );
  }
}
