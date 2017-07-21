import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ListView} from 'react-native';



/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,ScrollView,
    ListView,
    TouchableHighlight,
} from 'react-native';


class LessonListViewWithSectionDemo extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
        this.buttonTap();//初始化
    }

    getMoviesFromApiAsync() {
        return fetch('http://facebook.github.io/react-native/movies.json',
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    buttonTap=()=>{

        fetch( 'http://bbs.reactnative.cn/api/category/3'
            // , {
            // method: 'GET',
            // headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            // } )
            // }
        ).then((response)=>response.json())
            .then((jsondata) =>{
                console.log(jsondata);
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                this.setState({dataSource: ds.cloneWithRows(jsondata.topics)});
                this.setState({title:jsondata.description});
                //alert(jsondata);
            })
            .catch((error)=>{
                alert(error);
                console.warning(error);
            });

    };
    render() {
        return (
            <View style={[styles.container,{paddingTop: 22}]}>
                <TouchableHighlight style={{alignSelf:'flex-start', marginLeft:30}} onPress={this.buttonTap} >
                    <Image
                        // source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                        style={{height:40, width:40}}
                        source={{uri:'ic_launcher'}}
                    />
                </TouchableHighlight>
                <Text  style={{textAlign:'center',alignSelf:'center'}} >{this.state.title}</Text>
                <ListView style={{flex:5}}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => <CELL title={rowData.title} detailTitle={rowData.timestampISO}></CELL>}
                />
            </View>
        );
    }
}

class CELL extends Component{

    constructor(props){
        super(props);
        this.state = { detailTitle:'aaaa'};
    }
    render(){
        return(
            <View style={{flexDirection: 'column', backgroundColor:'#F5DD00'}}>
                <View style={{flexDirection: 'row',padding:10, justifyContent:'center',flex:1,alignItems:'center'}} >
                    <Text style={{flex:2 ,marginLeft:10,marginRight:10,fontSize: 15}} >{this.props.title}</Text>
                    <Text style={{flex:1,marginRight:10,color:'gray',fontSize: 12,textAlign:'right'}}>{this.props.detailTitle}</Text>
                </View>
                <View style={{height:.5,alignSelf:'stretch',backgroundColor:'gray'}}></View>
            </View>
        );
    }
}

const styles= StyleSheet.create({

    container:{flex:1,
        justifyContent:'center',
        backgroundColor: '#F5FC00',}
});








