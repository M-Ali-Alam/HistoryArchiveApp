import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


// Pages
import HomePage from "./homePage";
import MyArticles from "./myArticles";
import MyProfile from "./myProfile";
import Blank from "./blank";
import {DrawerContent} from "./Components/drawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerScreen()  {
    return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={props => <DrawerContent navigation />}>
          <Drawer.Screen name="HomePage" component={HomePage} />
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