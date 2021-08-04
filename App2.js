import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from "react-native";
import HeaderBodyText from "./components/headerBodyText";

const welcomeMessage = [
  { id: 1, 
    title: "Welcome to Hootr",
     body: "Read through the house guidelines", 
     isHeader: true, 
     headerStyle: { fontSize: "300"},
     images: require("./profile1.jpg"),
     flexDirection: "row", 
  },
  { id: 2, 
    title: "Stay True",
     body: "Share the truth about yourself, that is photos, name, age and your interest.", 
     isHeader:true, 
     headerStyle:{fontSize:"300"},
     images: require("./profile1.jpg"),
     flexDirection: "row",
    },
  { id: 3, 
    title: "Be Kind", 
    body: "Respect everyone on the platform, come out with openness", 
    isHeader:true, 
    headerStyle: {fontSize:"300"},
    images: require("./profile1.jpg"),
    flexDirection: "row",
  },
//   { id: 4, title: "Act Safe", body:"Don't be in a rush to give out your personal information easily.", isHeader:true, headerStyle: {fontSize:"300"}},
//   { id: 5, title: "Enjoy the moment", body:"Have fun while you meet new people.", isHeader:"true", headerStyle: {fontSize:"300"}}
]


// const WelcomePage= ({data, style }) =>
// data.map((item) => (
//     <View key={item.id} style={[style]}>
//      {item.isHeader && (<Text style={[headerStyle, item.headerStyle]}>{item.title}</Text> )}
//       <Text style={[bodyStyle, item.bodyStyle]}>{item.body}</Text>
//     </View>
//   ));

  // return(+
  //   <View style={[container, containerTopBottom]}>
  //     {paragraph}
  //   </View>
  // );

  //if the image does not appear on mobile view, pass style of height and width and if it does not
  // show, the view wrapping the Image tag place a style of flex:1,
  {/* <Image source={{uri : 'https://linkto-image.com'}}/> */}
  const App =() => {

    const { container, containerTopBottom, headerStyle, bodyStyle } = styles;
  return(
    <View style={[styles.container, containerTopBottom]}>
      <HeaderBodyText style={container} data={welcomeMessage} />
    </View>
  );
};

    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 12
      },
      containerTopBottom:{
        paddingVertical: 12,
      },
      headStyle:{
        fontSize:30,
        fontWeight: 'bold',
      },
      bodyStyle:{
        fontSize: 16,
        fontWeight: "300"
      },
      image:{
        resizeMode: "contain",
        height: 200,
        width: 200,
        borderRadius:40,
      }
    });



// const headerStyle = { fontSize: 30, padding: 10 };


export default App;