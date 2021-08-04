import React, { Profiler } from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Profile() {
return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headStyle}>Header</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.body1}>
                <Text style={styles.bodyStyle}>Body</Text>
            </View>
            <View style={styles.body2}>
                <View style={styles.body2i}>
                <Text style={styles.bodyStyle1}>Side1</Text>
                </View>
                <View style={styles.body2ii}>
                <Text style={styles.bodyStyle1}>Side2</Text>
                </View>
            </View>
        </View>
        <View style={styles.main}>
            <View style={styles.main1}>
            <Text style={styles.mainStyle}>Main</Text>
            </View>
        </View>
            <View style={styles.footer}>
            <Text style={styles.footerStyle}>Footer</Text>
            </View>
    </View>
)
}

export default Profile;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 12,
        marginHorizontal: 12
    },
    header:{
        flex: 0.1,
        backgroundColor: 'blue',
        marginVertical:5
    },
    headStyle:{
        fontSize:50,
        fontWeight:'bold',
        marginLeft: 80
    },
    body:{
        flex: 0.4,
        backgroundColor:'white',
        flexDirection:'row', 
    },
    body1:{
        flex: 1,
        backgroundColor: 'gold',
        marginRight:7,
        marginVertical:5,
        
    },
    bodyStyle:{
        fontSize:50,
        fontWeight:'bold',
        marginTop:90,
        marginHorizontal:25,
    },
    body2:{
        flex:1,
        backgroundColor: 'white',
        flexDirection:'column',
    },
    body2i:{
        flex:0.5,
        backgroundColor:'green',
        marginVertical:5
    },
    bodyStyle1:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:50,
        marginLeft:30,
    },
    body2ii:{
        flex:0.5,
        backgroundColor:'red',
        marginVertical:5
    },
    main:{
        backgroundColor:'white',
        flex: 0.45,
        marginVertical:5
    },
    main1:{
        backgroundColor:'teal',
        flex: 1,
    },
    mainStyle:{
        fontSize:50,
        fontWeight:'bold',
        marginTop:100,
        marginLeft:100,
    },
    footer:{
        backgroundColor:'grey',
        flex: 0.05,
        marginTop:10
    },
    footerStyle:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:  120
    }
})