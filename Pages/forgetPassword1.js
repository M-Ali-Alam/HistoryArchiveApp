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


const ForgetPassword1 = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');


    return (
    <View>
        <Header content="Forgot Password" navigation/>

        <View style={{width:"100%",height:"100%",backgroundColor:"#5c3b28",flexDirection: "column",}}>

            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Username*" onChangeText={(uname) => setUserName(uname)} />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder="Email*" onChangeText={(tmail) => setEmail(tmail)} />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonsContainer} onPress={() => navigation.navigate("ForgetPassword2")} >
                    <Text style={styles.buttons}>Send Confirmation Email</Text>
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
    marginTop:"40%",
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
        marginTop: "20%",
},

});

export default ForgetPassword1;