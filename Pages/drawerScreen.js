import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


// Pages
import HomePage from "./homePage";
import MyArticles from "./myArticles";
import Blank from "./blank";
import {DrawerContent} from "./Components/drawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation})  {
    return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomePage" component={HomePage} />
          <Drawer.Screen name="MyArticles" component={MyArticles} />
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