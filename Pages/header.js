import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.statusBar}></View>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Image
            source={require("../images/back_icon.png")}
            style={styles.ImageBackStyle}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>{props.content}</Text>
        
        <View style={{height: 50,flex: 1,width: 50}}></View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f1cbae",
    height: 70,
    flexDirection: "row",
    lineHeight: 0,
    justifyContent: "flex-start",
  },
  statusBar: {
    height: 25,
    backgroundColor: "#5c3b28",
  },
  ImageBackStyle: {
    height: 20,
    flex: 1,
    width: 40,
    resizeMode: "contain",
    marginLeft:"10%",
  },
  heading: {
    alignSelf:"center",
    justifyContent: "center",
    flex:3,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#5C3B28",
  },
});

export default Header;
