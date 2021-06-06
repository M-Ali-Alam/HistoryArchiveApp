import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import tokenTypeContext from "../context/tokenType";
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, FlatList } from "react-native";
// Pages
import HomePage from "./homePage";
import Blank from "./blank";
import {DrawerContent} from "./Components/drawerContent";


const Drawer = createDrawerNavigator();

const Gap = () => {
  return <View style={{ height: 20 }}></View>;
};

export default function DrawerScreen( props )  {

  const {token,setToken,type,setType} = React.useContext(tokenTypeContext);

  const [res,setRes] = useState()

  useEffect(() => {

    fetch("https://historyarchiveapi.herokuapp.com/myprofile", {
        method:'POST',
        body: JSON.stringify({
          token:token
        }),
        headers: {
          'Content-Type':
          'application/json',
        },
        }).then((response) => response.json())
        .then((json) => {
          if ( json.header["error"] != 0 ){
          }else{
            setRes(json.body)
          }
        }).catch((error) => {
          console.error(error);
        });
  }, [])


    return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={(props) => <DrawerContent />} >
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