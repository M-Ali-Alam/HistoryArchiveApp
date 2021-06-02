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

const SignUp = ({ navigation }) => {
  
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [userName, setUserName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [password1, setPassword1] = useState('');


 const validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    setEmail(text)
    return false;
  }
  else {
    setEmail(text)
    console.log("Email is Correct");
    return true
  }
}


 const handleSubmitButton = () => {
  
  if (!userName) {
    alert('Please enter username');
    return;
  }
  if (!firstName) {
    alert('Please First Name');
    return;
  }
  if (!lastName) {
    alert('Please Last Name');
    return;
  }
  if (!email) {
    alert('Please enter Email address');
    return;
  }
  if (!validate(email)){
    alert('Please enter valid Email address');
    return;
  }

  if (!password) {
    alert('Please enter password');
    return;
  }

  if (!password1) {
    alert('Please Re-Enter Password ')
    return;
  }

  if (password !== password1){
    alert('Password mismatch')
    return;
  }

  console.log("username = "+ userName);
  console.log("firstName = "+ firstName);
  console.log("lastName = "+ lastName);
  console.log("email = "+ email);
  console.log("password = "+ password);

    var tempData = {
      email: email,
      password: password,
      username:userName,
      firstname: firstName,
      lastname: lastName,
    }

    var tempBody =[];

    for (var kt in tempData) {
      var encodedtempKey = encodeURIComponent(kt);
      var encodedtempValue = encodeURIComponent(tempData[kt]);
      tempBody.push(encodedtempKey + '=' + encodedtempValue);
    }
    tempBody = tempBody.join('&');


  try{
    fetch("https://historyarchiveapi.herokuapp.com/signup", {
      method:'POST',
      body: tempBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => {
      console.log(tempBody)
      console.log(json)
      navigation.navigate("SignIn")
    }).catch((error) => {
      console.error(error);
    });
  }catch (error){
    console.log(error);
  }
 }

  return (
    <View>
      <Header content="Sign Up" navigation />

      <View style={styles.body}>
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="First Name*"  onChangeText={(fname) => setFirstName(fname)}/>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Last Name*" onChangeText={(lname) => setLastName(lname)} />
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Username*" onChangeText={(username) => setUserName(username)}/>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Email*" onChangeText={(em) => setEmail(em)}/>
        </View>

        <View>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Password*" onChangeText={(pass) => setPassword(pass)} />
        </View>

        <View>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Re-enter Password*" onChangeText={(pass1) => setPassword1(pass1)} />
        </View>

        <View style={styles.button2}>
          <TouchableOpacity style={styles.buttonsContainer} onPress={() => handleSubmitButton()}>
            <Text style={styles.buttons}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#5c3b28",
    flexDirection: "column",
    height: "100%",
  },
  inputView: {
    marginTop: "5%",
  },
  input: {
    height: 60,
    alignSelf: "center",
    marginTop: "2%",
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
    marginTop: "20%",
  },
  button2: {
    marginTop: "10%",
  },
  text: {
    textAlign: "right",
    marginRight: "10%",
    color: "#f1cbae",
    textDecorationLine: "underline",
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

export default SignUp;
