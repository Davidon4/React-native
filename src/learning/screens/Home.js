import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.first}></View>
                <View style={styles.second}></View>
            </View>

            <View style={styles.footer}>
            <View style={styles.one}></View>
                <View style={styles.two}></View>  
            </View>
       </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'teal',
    },
    header: {
        flex: 0.5,
        backgroundColor: 'green'
    },
    first:{
        flex:0.5,
        backgroundColor:'yellow'
    },
    second:{
        flex:0.5,
        backgroundColor:'red'
    },
    footer:{
    flex: 0.5,
    backgroundColor: 'blue',
    flexDirection:'row'
    },
    one:{
        flex:0.5,
        backgroundColor:'brown'
    },
    two:{
        flex:0.5,
        backgroundColor:'purple'
    }
})
    