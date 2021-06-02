import React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from "react-native";
import { MaterialCommunityIcons} from '@expo/vector-icons'; 

const MiniArticle = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <ImageBackground source={require("../../images/bridge.png")} style={styles.img}>
                <MaterialCommunityIcons name="pencil" size={30} style={styles.icon} color="#4F2F24" />
            </ImageBackground>
        </View>

        <Text style={styles.eventName}>Event Name</Text>
        <Text style={styles.author}>By: Author Name</Text>
        <Text style={styles.location}>Location: Location name</Text>
        
        <Text style={styles.text} numberOfLines={4} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</Text>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1CBAE",
  },
  author:{
    marginLeft:"5%",
    fontSize:15,
    fontSize:18,
    paddingTop:2,
    color:"#4F2F24",
  },
  eventName:{
    paddingTop:3,
    marginLeft:"5%",
    fontSize:24,
    fontWeight:"bold",
    color:"#4F2F24",
  },
  location:{
    paddingTop:3,
    marginLeft:"5%",
    fontSize:20,
    color:"#4F2F24",
  },
  text:{
    paddingTop:3,
    marginLeft:"5%",
    marginRight:"3%",
    color:"#4F2F24",
    paddingBottom:10,
  },
  imgContainer:{
    marginTop:"5%",
    alignSelf:"center",
    alignItems:"center",
    width:"90%",
    height:220,
  },
  img:{
    resizeMode:"contain",
    height:"100%",
    width:"100%",
    flexDirection:"row-reverse",
  },
  icon:{
    margin:10,
    height:30,
  },
});

export default MiniArticle;
