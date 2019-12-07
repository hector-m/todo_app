import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, FlatList, SectionList} from 'react-native';
import styles from "../Styles";
import Task from "./Task";

type Props = {};
export default class Home extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Hector Morales',
            data: "",
            tasks: [],
        }; //this is how  you set up state
    }

    getTasks() {
        var data = require('../data/MockUser.json');
        this.state['data'] = data

        var taskArray = Object.keys(data.tasks).map(function(_) { return data.tasks[_]; })
        this.state['tasks'] = taskArray
        return taskArray
    }
    
    render() {
        var tasks = this.getTasks()
        console.log("Tasks: " + tasks.length)
        if (tasks.length == 0) {
            var taskView =
            <View style={styles.container}>
                <Image source={require('./assets/images/emptyBoard.png')} style = {{marginBottom: 70}}/>
                <Text style={styles.welcome}>No Tasks</Text>
                <Text style={styles.instructions}>You have no tasks to do.</Text>
            </View>

        } else {
            var taskView =
            <View style={styles.container}>
                <SectionList
                    style={{ width: "90%"}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <Task data={item}/>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold', fontSize:13, color:"#8B87B3", marginVertical: 15}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Today', data: this.state.tasks},
                        {title: 'Tomorrow', data: this.state.tasks},
                        {title: 'Wednesday', data: this.state.tasks},
                    ]}
                    keyExtractor={(item, index) => item["id"]}
                />
            </View>
        }
        return (
            taskView
        );
    }
}
