// Libraries
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages 
import LandingPage from "./Pages/landingPage";
import SignIn from "./Pages/signIn";
import Blank from "./Pages/blank";
import SignUp from "./Pages/signUp";
import ForgetPassword1 from "./Pages/forgetPassword1";
import ForgetPassword2 from "./Pages/forgetPassword2";
import ForgetPassword3 from "./Pages/forgetPassword3";
import ChangePassword from "./Pages/changePassword";
import HomePage from "./Pages/homePage";
import MyProfile from "./Pages/myProfile";
import DrawerScreen from "./Pages/drawerScreen";
import MyArticles from "./Pages/myArticles";
import moderatorPanel from "./Pages/moderatorPanel";
import ModeratorPanel from './Pages/moderatorPanel';

const Stack = createStackNavigator();


export default function App() {
    return (  
      <View style= {styles.container}> 
        <NavigationContainer >
        <Stack.Navigator initialRouteName="ModeratorPanel" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="ForgetPassword1" component={ForgetPassword1} />
            <Stack.Screen name="ForgetPassword2" component={ForgetPassword2} />
            <Stack.Screen name="ForgetPassword3" component={ForgetPassword3} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            <Stack.Screen name="MyArticles" component={MyArticles} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="ModeratorPanel" component={ModeratorPanel} />

          </Stack.Navigator>
        </NavigationContainer>
      </View>  
    );  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1, 
  },  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,  
  },  
}); 
