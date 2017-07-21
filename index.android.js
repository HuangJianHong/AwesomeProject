/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Image, StyleSheet, Text, View} from "react-native";
import {ScrollView, ToastAndroid} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import {TouchableOpacity, TouchableHighlight,TextInput, ListView, RefreshControl} from "react-native"
//
// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {showText: true};
//
//         setInterval(() => {
//             this.setState({showText: !this.state.showText});
//         }, 1000);
//     }
//
//     render() {
//         let display = this.state.showText ? this.props.text : '';
//         return (
//             <Text>{ display}</Text>
//         );
//     }
// }
//
//
// class Greeting extends Component {
//     render() {
//         return (
//             <Text> Hello {this.props.name}</Text>
//         );
//     }
// }
//
//  class FlexDirecationBasics extends  Component{
//     render(){
//       return(
//           // 尝试把`flexDirection`改为`column`看看
//           <View style={{flex: 1, flexDirection: 'column'}}>
//               <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//               <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//               <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//           </View>
//       );
//     }
//
//  };
//
//  class JustifyContentBasics extends Component{
//      render(){
//        return(
//            <View Style ={{
//                flexDirection: 'column',
//                justifyContent: 'center',
//                alignItems: 'center'
//            }}>
//             <View style= {{width:50, height: 50 , backgroundColor: 'powderblue'}}/>
//             <View style= {{width:50, height: 50 , backgroundColor: 'skyblue'}}/>
//             <View style= {{width:50, height: 50 , backgroundColor: 'powderblue'}}/>
//            </View>
//
//
//        );
//      }
//
//  };

//
// export default class AwesomeProject extends Component {
//     render() {
//
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//
//         return (
//             <View style={ {alignItems: 'center'}}>
//                 <Greeting name='Rexxar'/>
//                 <Greeting name='Jaina'/>
//                 <Greeting name='Valeera'/>
//
//                 <Image source={pic} style={ {width: 193, height: 110} }/>
//             </View>
//
//
//
//             // <View>
//             //     <Blink text="I love to blink"/>
//             //     <Blink text="Yes blinking is so great"/>
//             //     <Blink text="Why did they ever take this out of HTML"/>
//             //     <Blink text="Look at me look at me look at me"/>
//             // </View>
//
//             // <View style={styles.container}>
//             //   <Text style={styles.welcome}>
//             //     Welcome to React Native!
//             //      2017年5月31日16:00:44
//             //   </Text>
//             //   <Text style={styles.instructions}>
//             //     To get started, edit index.android.js
//             //   </Text>
//             //   <Text style={styles.instructions}>
//             //     Double tap R on your keyboard to reload,{'\n'}
//             //     Shake or press menu button for dev menu
//             //   </Text>
//             // </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
// const ScrollViewTestStyle = StyleSheet.create({
//     scroll_item:{
//         borderWidth: 0,
//         borderRadius: 5,
//         borderColor: 'rgba(0,0,0,0.1)',
//         backgroundColor: '#fff',
//         margin: 5,
//         height: 150,
//         padding: 15,
//         shadowColor: '#ccc',
//         shadowOffset: {width: 2, height: 2,},
//         shadowOpacity: 0.5,
//         shadowRadius: 10,
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         fontSize: 20,
//         elevation: 3,
//         overflow: 'hidden',
//     }
// });

///*************************** FlexBox ********************************************/
// export  default class LessonFlex extends Component {
//     render() {
//         return (
//             <View style={styles.contain}>
//                 <View style={styles.child1}/>
//                 <View style={styles.child2}/>
//             </View>
//         )
//     }
// }
//
// var styles = StyleSheet.create({
//     contain: {
//         backgroundColor: "blue",
//         padding: 30,
//         flex:1
//     },
//     child1:{
//         flex:1,
//         backgroundColor:"green"
//     },
//
//     child2:{
//         flex:2,
//         backgroundColor:"yellow"
//     }
// });


///*************************** RefreshControl ********************************************/
class LessonRefreshControl extends Component {
    // 初始化模拟数据

    constructor(props){
        super(props);
        this.state= {
            isRefreshing : false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (value, i) => ({text: '初始行'+i})),
          };
    }

     render(){
        const rowsArray = this.state.rowData.map((row, ii)=> {
            return <Row  key={ii} txt={row.text}></Row>
        });

         return (
        <View style={{flex:1}}>
            <ScrollView style={styles.scrollview}
             refreshControl={
                 <RefreshControl
                     refreshing = {this.state.isRefreshing}
                     onRefresh={this._onRefresh}
                     colors={['#ff0000','#00ff00', '#0000ff', '#3ad564']}
                     progressBackgroundColor='#ffffff'  />
             }
            >
                {rowsArray}
            </ScrollView>
        </View>
       )
     }

     _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout( () => {
            //准备下拉刷新的五条数据；
            const  newData = Array.from(new Array(5))
                .map( (value, i) => ({
                    text:'刷新行' + (this.state.loaded+i)
                })).concat(this.state.rowData);

            this.setState({
                isRefreshing: false,
                loaded:this.state.loaded + 5,
                rowData: newData,
            });
        }, 4000);
     }
}
  class Row extends  Component{
     constructor(props){
         super(props)
     }

    render(){
        return (
           <View style={styles.row}>
             <Text style={styles.text}>{this.props.txt}</Text>
           </View>
        )
    }
 }

const styles =StyleSheet.create({
    row: {
        borderColor: 'red',
        borderWidth: 5,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
});


AppRegistry.registerComponent('AwesomeProject', () => LessonRefreshControl);
// import './app/index'




















