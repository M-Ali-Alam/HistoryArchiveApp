import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';

// Pages
import HomePage from "./homePage";
import Blank from "./blank";
import {DrawerContent} from "./Components/drawerContent";
import userTypeContext from "./landingPage";

const Drawer = createDrawerNavigator();

export default function DrawerScreen({ props })  {

    return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={props => <DrawerContent navigation />}>
          <Drawer.Screen name="HomePage" component={HomePage} navigation/>
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