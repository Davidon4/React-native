import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function login(){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.bodyHead}>
                    <Text style={styles.text}>Login</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.mainStyle1}>
                    <Text style={styles.textStyle}>Email</Text>
                    </View>
                    <View style={styles.mainStyle2}>
                    <Text style={styles.textStyle}>Password</Text>
                    </View>
                </View>
                <View style={styles.bodyTail}>
                    <View style={styles.tailStyle}>
                        <Text style={styles.signIn}>Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    )
} 
export default login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    body:{
        flex:0.43,
        backgroundColor:'white',
        marginHorizontal:10,
        shadowOpacity:0.8,
        shadowColor:'black',
        shadowRadius:10,
        shadowOffset:{
            height:3,
            width:3
        }
    },
    bodyHead:{
        flex:0.25,
        backgroundColor:'maroon',
    },
    text:{
        color:'white',
        fontSize:30,
        marginLeft:25,
        marginTop:15
    },
    textStyle:{
        fontSize:20,
        marginLeft:80,
        marginTop:10,
        fontWeight:'500'
    },
    main:{
        flex:0.5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    mainStyle1:{
        flex:0.35,
        backgroundColor:'grey',
        width:'80%',
        marginBottom:15,
        borderRadius:5,
    },
    mainStyle2:{
        flex:0.35,
        backgroundColor:'grey',
        width:'80%',
        borderRadius:5
    },
    bodyTail:{ 
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    tailStyle:{
        backgroundColor:'maroon',
        flex:0.9,
        width:'60%',
    },
    signIn:{
        color:'white',
        fontSize:23,
        marginLeft:70,
        marginTop:5
    }
})