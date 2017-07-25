import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ListView, RefreshControl} from 'react-native';

class LessonRefreshControl extends Component {
    // 初始化模拟数据

    constructor(props){
        super(props);
        this.state= {
            loaded: 0,
            isRefreshing : false,
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
                                    onRefresh={this._onRefresh.bind(this)}
                                    // title = "Loading...."
                                    // titleColor="#00ff00"
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
                loaded:this.state.loaded + 5,
                isRefreshing: false,
                rowData: newData,
            });
        }, 2000);
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







