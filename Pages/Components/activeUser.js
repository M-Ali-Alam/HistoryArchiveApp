import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Entypo, AntDesign  } from '@expo/vector-icons';

const Gap = () => {
    return(
        <View style={{width:20}}></View>
    )
};


const ActiveUser = () => {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
        <Image source={require("../../images/profilePic.jpeg")} style={styles.img}>
        </Image>
        <Text style={styles.person}>Ali Alam</Text>
        <Gap/>
        <View style={styles.icons}>
        <Entypo name="warning" size={32} color="#4F2F24" />
        </View>
        <Gap/>
        <View style={styles.icons}>
        <Entypo name="block" size={32} color="#4F2F24" />        
        </View>
        <Gap/>
        <View style={styles.icons}>
        <AntDesign name="like1" size={32} color="#4F2F24" />
        </View>
        </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1CBAE",
    borderRadius: 10,
  },
  contentContainer:{
    flex:1, 
    flexDirection: 'row'
  },
  person:{
    fontSize:24,
    marginLeft:"5%",
    textAlignVertical: "center",
    color:"#4F2F24",
  },
  img:{
    width: 60,
    height: 60 ,
    margin: 4,
    borderRadius : 200  },
  icons:{
    justifyContent: 'center',
  },

});

export default ActiveUser;
