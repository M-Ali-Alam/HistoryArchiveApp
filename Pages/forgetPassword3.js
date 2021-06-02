import { NavigationContainer } from "@react-navigation/native";
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


const ForgetPassword3 = ({ navigation }) => {

    const [code, setCode] = useState('');


    return (
    <View>
        <Header content="Forgot Password" navigation/>

        <View style={{width:"100%",height:"100%",backgroundColor:"#5c3b28",flexDirection: "column",}}>

            <View style={styles.labelContainer}>
                <TouchableOpacity style={styles.labelContainer1} >
                    <Text style={styles.buttons}>Enter New Password</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Password* " onChangeText={(c) => setCode(c)} />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Re-enter Password* " onChangeText={(c) => setCode(c)} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonsContainer} onPress={() => navigation.navigate("LandingPage")} >
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
labelContainer1:{
    height: 50,
    backgroundColor: "#f1cbae",
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
},
labelContainer:{
    marginTop:"20%",
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
        fontSize: 24,
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

export default ForgetPassword3;