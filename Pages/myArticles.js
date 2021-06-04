import React from "react";
import { StyleSheet,ScrollView,Image, TouchableOpacity, Text, View } from "react-native";

// importing component
import Header from "./header";
import MiniArticle from "./Components/miniArticle";

const Gap = () => {
    return(
        <View style={{height:20}}></View>
    )
};

const MyArticles = () => {
  return(
  <View style={styles.container}>
      <Header content="My Articles" navigation />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      <MiniArticle/>
      <Gap/>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../images/plusButton.png")}
            style={styles.plusButtonImg}
          />
        </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
  },
  scroll:{
      width:"90%",
      alignSelf:"center",
  },
  plusButtonImg:{
    position:"absolute",
    bottom:30,
    right:"-7%",
    resizeMode:"contain",
    height:60,
  }
});

export default MyArticles;
