/**
 * Created by Administrator on 2017/7/4.
 */
import React, {Component} from "react";
import {ScrollView, Text, StyleSheet, ToastAndroid} from  "react-native";


export  default  class ScrollViewTest extends  Component{

    _onScroll(){
    }

    _onEndTeacded(){
        ToastAndroid.show("到达底部了", ToastAndroid.SHORT);
    }


    render(){
        return (
            <ScrollView
               ref = "scrollView"
               horizontal={false}     //设置是否是 横向滚动
               onscroll={this._onScroll}
               removeClippedSubviews={true}  //实验特性， 可以优化滚动性能
               showsVerticalScrollIndicator={true} //是否显示垂直滚动条
                refreshControl={}
            >

                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView1</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView2</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView3</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView4</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView5</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView6</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView7</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView8</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView9</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView10</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView11</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的scrollView12</Text>
            </ScrollView>
        )

    }
}

   const ScrollViewTestStyle = StyleSheet.create({
      scroll_item:{
          borderWidth:0,
          borderRadius: 5,
          borderColor: 'rgba(0,0,0,0.1)',
          backgroundColor:'#fff',
          margin: 5,
          height: 150,
          padding:15,
          shadowColor:'#ccc',
          shadowOffset: {width:2, height:2},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          textAlign:'center',
          fontSize: 20,
          elevation:3,
          overflow:'hidden'
      }
   });

