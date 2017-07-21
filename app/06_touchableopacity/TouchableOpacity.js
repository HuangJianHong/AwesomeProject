import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
export  default class LessonOpacity extends Component {
    render() {
        return (
            <View style={styles.contain}>
                <View  style={styles.flex}>
                    <View style={styles.input}></View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => this._show()}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _show(){
        alert("点击搜索按钮");
    }
}



var styles = StyleSheet.create({
    flex:{
        flexDirection:"row",
        flex:1
    },

    contain: {
        flexDirection: "row",
        height:45,
        marginTop:25,
        flex:1
    },

    input:{
        height:45,
        borderWidth:3,
        borderRadius:5,
        marginLeft:5,
        paddingLeft:5,
        borderColor:"#ccc",
        flex:1
    },

    btn:{
        width:55,
        height:45,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#23BEff",
        justifyContent:"center",
        alignItems:"center",
    },
    search:{
        color:"#fff",
        fontSize:15,
        fontWeight:"bold",
    }

});





