import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, FlatList } from "react-native";

// Pages
import HomePage from "./homePage";
import Blank from "./blank";
import {DrawerContent} from "./Components/drawerContent";
import userTypeContext from "./landingPage";

// importing component
import Header from "./header";
import MiniArticle from "./Components/miniArticle";
import HeaderMenu from "./Components/headerMenu"

const Drawer = createDrawerNavigator();

const Gap = () => {
  return <View style={{ height: 20 }}></View>;
};

export default function DrawerScreen( props )  {

    return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={props => <DrawerContent navigation />} >
          <Drawer.Screen name="HomePage"  component= {HomePage} />
          <Drawer.Screen
              name="Logout"
              component={Blank}
              listeners={({ navigation }) => ({ 
                  state: () => {
                      navigation.replace("LandingPage")
                  }
              })}
          />
        </Drawer.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5C3B28",
        width: "100%",
        height: "100%",
    },
    scroll: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 50,
        marginTop: 10,
    },
    plusButtonImg: {
        position: "absolute",
        bottom: 30,
        right: "-7%",
        resizeMode: "contain",
        height: 60,
    },
    img:{
      height:60,
      resizeMode:"contain",
    }
});