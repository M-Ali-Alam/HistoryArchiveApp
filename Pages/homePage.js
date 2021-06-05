import React from "react";
import { StyleSheet,ScrollView,Image, TouchableOpacity, Text, View } from "react-native";

// importing component
import Header from "./header";
import TimeLine from "./Components/timeline"
import MiniArticle from "./Components/miniArticle"

const Gap = () => {
    return(
        <View style={{height:20}}></View>
    )
};

const HomePage = () => {



  return(
  <View style={styles.container}>
      <Header content="HomePage" navigation />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <TimeLine/>
      <MiniArticle eventName="1947" authorName="Muneeb ur Rehman"/>
      <Gap/>
      <MiniArticle eventName="Fall of Berlin Wall" authorName="The Great Muneeb ur Rehman"/>
      <Gap/>
      <MiniArticle eventName="Independence of Pakistan" authorName="Aniq Ahmed"/>
      <Gap/>
      <MiniArticle eventName="1947" authorName="author name"/>
      <Gap/>
      <MiniArticle eventName="1947" authorName="Author 1"/>
      <Gap/>
      <MiniArticle eventName="1947" authorName="Author 2"/>
      <Gap/>
      <MiniArticle eventName="1947" authorName="Author 3"/>
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

export default HomePage;
