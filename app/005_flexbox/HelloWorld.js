import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
export  default class LessonFlex extends Component {
    render() {
        return (
            <View style={styles.contain}>
                <View style={styles.child1}/>
                <View style={styles.child2}/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
   contain: {
       backgroundColor: "blue",
       padding: 30,
       flex:1
   },
   child1:{
       flex:1,
       backgroundColor:"green"
   },

   child2:{
       flex:2,
       backgroundColor:"yellow"
   }
});







