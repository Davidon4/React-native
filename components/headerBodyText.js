import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const HeaderBodyText =({data, style}) => {

    const { headerStyle, bodyStyle, image } = styles

    const content = data.map((item) => (
        <View key={item.id} style={style}>
           {item.isHeader && (
        <Text style={[headerStyle, item.headerStyle]}>{item.title}</Text>
           )}
        <Text style={[bodyStyle]}>{item.body}</Text>
        {item.image && <Image style={image} source={item.images} />}
        </View>
    ))
    return content;
}

const styles= StyleSheet.create({
    headerStyle:{
        fontSize : 30,
        fontWeight: 'bold',
    },
    bodyStyle:{
        fontSize: 16,
        fontWeight: "300"
    },
})

export default HeaderBodyText;