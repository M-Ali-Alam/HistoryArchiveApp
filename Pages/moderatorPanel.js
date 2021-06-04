import React from "react";
import { StyleSheet,ScrollView,Image, TouchableOpacity, Text, View } from "react-native";

// importing component
import Header from "./header";
import ActiveUser from "./Components/activeUser"
import InactiveUser from "./Components/inactiveUser"


const Gap = () => {
    return(
        <View style={{height:10}}></View>
    )
};


const ModeratorPanel = () => {
  return(
    
  <View style={styles.container}>
      <Header content="ModeratorPanel" navigation />

      <Text style={styles.textcontainer}>ACTIVE USERS</Text> 

      <View style={styles.scrollContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>  
      <ActiveUser/>
      <Gap/>
      <ActiveUser/>
      <Gap/>
      <ActiveUser/>
      <Gap/>
      <ActiveUser/>
      <Gap/>
      <ActiveUser/>
      <Gap/>
      </ScrollView>
      </View>

      <Gap/>
      <Gap/>
      <Gap/>

      <Text style={styles.textcontainer}>BANNED USERS</Text> 

      <View style={styles.scrollContainer2}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <InactiveUser/>
      <Gap/>
      <InactiveUser/>
      <Gap/>
      <InactiveUser/>
      <Gap/>
      <InactiveUser/>
      <Gap/>
      <InactiveUser/>
      </ScrollView>
      </View>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
  },

  textcontainer: {
    top: 15,
    height: 50,
    backgroundColor: "#F1CBAE",
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#5C3B28",
  },
  scrollContainer:{
      top: 25,
    width: "100%",
    height: "34%",
  },
  scrollContainer2:{
      top: 25,
    width: "100%",
    height: "24%",
  },

  scroll:{
      top: 5,
      width:"95%",
      alignSelf:"center",
  },
});

export default ModeratorPanel;
