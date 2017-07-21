import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ListView} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
export  default class LessonListView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state={
            dataSource: ds.cloneWithRows([
                "android课程","ios课程","java课程","javascript","Untiy3D","PHP","bigData","javascript","Untiy3D","PHP","bigData"
            ])
        };
    }

    render() {
        return (
            <View style={{flex:1, margin:3, backgroundColor:"yellow"}}>
                <ListView
                    style={styles.contain}
                    dataSource ={this.state.dataSource}
                    renderRow = { (rowData, sectionID, rowID) => this._renderRow(rowData, rowID)}
                />
            </View>
        )
    }

    _renderRow(rowData, rowID){
        return (
            <View style={styles.row}>
                <Text style ={styles.content}>{rowData + "  行数:" + rowID}</Text>
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


class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jacksgrfjdfjfdon', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}






