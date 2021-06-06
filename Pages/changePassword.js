import React from "react";
import {useState} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

import Header from "./header";
import tokenTypeContext from "../context/tokenType";


const ChangePassword = ({ navigation }) => {

    const {token,setToken,type,setType} = React.useContext(tokenTypeContext);
    const [previous, setPrevious] = useState('');
    const [new1, setNew1] = useState('');
    const [new2, setNew2] = useState('');
    const [error, setError] = useState('');

    const handleSubmitButton = async() => { 

        if(!previous){
          console.log('Please enter Previous Password');
          return;
        }
        
        if(!new1){
            console.log('Please enter New Password');
            return;
  
        }

        if(new1 != new2){
          console.log('Password Mismatch');
          return;
        }
    
        try{
          await fetch("https://historyarchiveapi.herokuapp.com/changepassword", {
            method:'POST',
            body: JSON.stringify({
              token: token,  
              oldPassword:previous,
              newPassword:new1
            }),
            headers: {
              'Content-Type':
              'application/json',
            },
            }).then((response) => response.json())
            .then((json) => {
                console.log("This is json")
                console.log("This is json")
                console.log("This is json")
                console.log("This is json")
                console.log("This is json")
                console.log(json)

              if (json.header["error"] != 0) {
                console.log(json.header.message)
              }else{
                console.log("Password Changed Successfully")
                navigation.navigate("LandingPage")
              }
            }).catch((error) => {
              console.error(error);;
            });
          }catch (error){
            console.log(error);
          }
      }


    return (
    <View>
        <Header content="Change Password" navigation/>

        <View style={{width:"100%",height:"100%",backgroundColor:"#5c3b28",flexDirection: "column",}}>
            <View style={{marginTop:"10%"}}></View>

            <View style={styles.inputView}>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Previous Password" onChangeText={(pre) => setPrevious(pre)} />
            </View>

            <View style={styles.inputView}>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="New Password" onChangeText={(newP) => setNew1(newP)} />
            </View>

            <View style={styles.inputView}>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Re-enter new password" onChangeText={(newP1) => setNew2(newP1)} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonsContainer} onPress={() => handleSubmitButton()} >
                    <Text style={styles.buttons}>Change Password</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    </View>);
}

const styles = StyleSheet.create({
container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#5c3b28",
    alignContent:"center",
},
buttonsContainer: {
    height: 50,
    backgroundColor: "#f1cbae",
    borderRadius: 10,
    justifyContent: "center",

    alignSelf: "center",
    width: "80%",
  },
  buttons: {
    fontSize: 28,
    paddingVertical: 5,
    textAlign: "center",
    alignContent: "center",
    color: "#4f2f24",
  },
  button: {
    marginTop:"30%",
  },
    input: {
        height: 60,
        // margin: 12,
        alignSelf: "center",
        // marginTop: "5%",
        fontSize: 20,
        fontWeight: "bold",
        color: "#4F2F24",
        backgroundColor: "#f1cbae",
        width: "80%",
        borderWidth: 1,
        paddingLeft : 10,
    },
    inputView: {
        marginTop: "10%",
},

});

export default ChangePassword;