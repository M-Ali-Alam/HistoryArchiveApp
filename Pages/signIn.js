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
import MyButton from "./Components/MyButtons";
import tokenTypeContext from "../context/tokenType";

const SignIn = ({ navigation }) => {

  const {token,setToken,type, setType} = React.useContext(tokenTypeContext);


  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmitButton = async() => { 
    if(!username){
      setError('Please enter username');
      return;
    }
    
    if(!password){
      setError('Please enter password');
      return;
    }

    try{
      await fetch("https://historyarchiveapi.herokuapp.com/signin", {
        method:'POST',
        body: JSON.stringify({
          username:username,
          password:password
        }),
        headers: {
          'Content-Type':
          'application/json',
        },
        }).then((response) => response.json())
        .then((json) => {
          console.log("json = ")
          console.log(json)
          console.log("error code = ")
          console.log(json.header['error code'])
          if ( !Object.keys(json.body).length ){
            setError(`${json.header.message}`)
          }else{
            setToken(json.body.token)
            setType(json.body.userType)
            navigation.navigate("DrawerScreen", {token :json.body.token, userType: json.body.userType})
          }
        }).catch((error) => {
          console.error(error);
        });
      }catch (error){
        console.log(error);
      }
  }

  return (
    <View>
      <Header content="Sign In"  navigation/>

      <View style={styles.body}>
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="Username*" onChangeText={(uname) => setUsername(uname)} />
        </View>

        
        <View>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Password*" onChangeText={(pass) => setPassword(pass)} />
        </View>

        <View style={styles.container}>
          <Text style={styles.textPart1}></Text>
          <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword1")}>
            <Text style={styles.textPart2}>Forgot Password</Text>
            </TouchableOpacity>    
        </View>

        <View>
          <Text style={styles.error}>{error}</Text>
        </View>

        <View style={styles.button1}>
          <TouchableOpacity style={styles.buttonsContainer} onPress={() => handleSubmitButton()}>
            <Text style={styles.buttons}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button2}>

          <MyButton style={styles.buttonsContainer0} content={"Sign up"} changeTo = {"SignUp"} />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  error:{
    fontSize:18,
    alignSelf:'center',
    color:'red',
    top:"180%"
  },

  container: {
    // flex: 1,
    flexDirection:'row',
    // flexWrap:'wrap',
    justifyContent: 'flex-end',
    // padding: 10,
    marginRight:"10%"
  },
  textPart2: {
    // flexWrap:'wrap',
    fontSize: 16,
    color: "#f1cbae",
    textDecorationLine: "underline",
  },


  body: {
    backgroundColor: "#5c3b28",
    flexDirection: "column",
    height: "100%",
  },
  inputView: {
    marginTop: "20%",
  },
  input: {
    height: 60,
    margin: 12,
    alignSelf: "center",
    marginTop: "5%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F2F24",
    backgroundColor: "#f1cbae",
    width: "80%",
    justifyContent: "flex-start",
    borderWidth: 1,
    paddingLeft : 10,
  },
  button1: {
    marginTop: "15%",
  },
  button2: {
    marginTop: "10%",
  },
  forgetView:{
    textAlign: "right",
    marginRight: "10%",
  },
  text: {
    
    color: "#f1cbae",
    textDecorationLine: "underline",
  },
  forget: {
    width: "100%",
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
});

export default SignIn;
