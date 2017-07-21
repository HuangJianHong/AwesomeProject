import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ListView} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 * https://github.com/wsd272535439/react-native-ListViewDemo/blob/master/index.ios.js
 *
 */
export  default class LessonListViewWithSection0 extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,       //行布局不同是，触发刷新，
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2,   //section不同是，触发刷新;  sectionHead
        });

        this.state={
            dataSource:ds,
            /*//字典套数组的数据结构：*/
            // abc就是 sectionID；section分区的概念；
            data:{a:["h", "i"],b:["j", "k"],c:["l", "m"],d:["n", "o"],e:["p", "q"],f:["r", "s"],g:["t", "u"],},

            //数组的数据结构
            // dataSource: ds.cloneWithRows([
            //     "android课程","ios课程","java课程","javascript","Untiy3D","PHP","bigData","javascript","Untiy3D","PHP","bigData"
            // ])
        };
    }

    render() {
        return (
            <View style={{flex:1, margin:3, backgroundColor:"yellow"}}>
                <ListView
                    style={styles.contain}
                    dataSource ={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                    renderRow = { (rowData, sectionID, rowID) => this._renderRow(rowData,sectionID, rowID)}
                />
            </View>
        )
    }

    _renderRow(rowData, sectionID, rowID){
        return (
            <View style={styles.row}>
                <Text style ={styles.content}>{rowData + "     sectionID:" + sectionID   + "    行数:" + rowID}</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    contain: {
        flex:1,
        marginTop:25,
        padding:25,
        backgroundColor:"#ccc"
    },

    row:{
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        height:200,
        borderBottomWidth: 1,
        backgroundColor:"red",
        borderColor:"red"
    },
    content:{
        flex:1,
        fontSize:20,
        color:"blue",
        lineHeight:100,
    },
});







