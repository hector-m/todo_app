import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import styles from "../Styles";
import { ListItem, CheckBox, Icon} from 'react-native-elements'

type Props = {};
export default class Task extends Component<Props> {
    constructor(props) {
        super(props);
        data = props["data"]
        colorPairing = {"Personal": "#F9C229", "Work": "#1ED102"}
        this.state = {
            id: data["id"],
            body: data["body"],
            project: data["project"],
            start: data["start"],
            reminder: data["reminder"],
            color: colorPairing[data["project"]],
            checked: false
        }; //this is how  you set up state
    }

    onCheckPress = () => {
        this.setState({checked: !this.state.checked})
    }

    getLeftIcon() {
        if (this.state["checked"]) {
            var icon = (
            <Icon
                size={18}
                containerStyle = {{marginRight: 10}}
                name='check-circle'
                type='feather'
                color='#91DC5A'
                onPress={this.onCheckPress}
            />)
        } else {
            var icon = (
            <Icon
                size={18}
                containerStyle = {{marginRight: 10}}
                name='circle'
                type='feather'
                color='#D9D9D9'
                onPress={this.onCheckPress}
            />)
        }
        return (
            <View style={{width:75, marginRight:15, flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                {icon}
                <Text style={{color:"#C6C6C8", fontSize:11}}>{new Date(this.state["start"]).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
            </View>
        );
    }

    onBellPress = () => {
        this.setState({reminder: !this.state.reminder})
    }

    getRightIcon() {
        var t = `#${this.state["reminder"] ? 'FFDC00' : 'D9D9D9'}`
        return (
                <Icon
                size={15}
                name='bell'
                type='font-awesome'
                color={t}
                onPress={this.onBellPress}
                />
        );
    }

    render() {
        if (this.state.checked) {
            checkStyle = {color: '#D9D9D9', textDecorationLine: 'line-through'}
        } else {
            checkStyle = {color: '#554E8F'}
        }
        return (
            <ListItem
                key={this.state['id']}
                title={this.state['body']}
                titleStyle = {{fontSize: 14, fontWeight: '700'}, checkStyle}
                containerStyle = {{
                    height: 55,
                    backgroundColor:"white",
                    borderRadius: 5,
                    marginBottom:15,
                    borderBottomWidth: 0,
                    shadowOpacity: 0.05,
                    shadowColor: '#000000',
                    shadowOffset: { height: 0, width: 4 },
                    borderLeftWidth: 4,
                    borderColor: this.state["color"],
                    justifyContent: "center"
                }}
                leftIcon = {this.getLeftIcon()}
                rightIcon = {this.getRightIcon()}
            />
        );
    }
}
