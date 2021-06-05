import React from "react";
import {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import Header from "./header";


const MyProfile = ({ navigation }) => {

    const [username,setUsername] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');


    const tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjkyYjIwNTRmMzNiMWNjNGFlZGY2YSIsInVzZXJuYW1lIjoiYWJjIiwiaWF0IjoxNjIyOTAyODA5fQ.r4tRzYLolN6BwCzbzBik444CnQh9YArSMTWqxbhYGqs";


    useEffect( () => {

        try{
            fetch("https://historyarchiveapi.herokuapp.com/myprofile", {
              method:'POST',
              body: JSON.stringify({
                token:tokenValue
              }),
              headers: {
                'Content-Type':
                'application/json',
              },
              }).then((response) => response.json())
              .then((json) => {
                  if (json.body.data.credentials != undefined){
                    setPhoneNum(json.body.data.credentials.phoneNo)
                    setFirstName(json.body.data.credentials.firstname)
                    setLastName(json.body.data.credentials.lastname)
                  }
                  setUsername(json.body.data.username)
                    setEmail(json.body.data.email)
              })
            }catch (error){
                console.log(error);
            }
      });
    
    return (
        <View>
            <Header content="Change Password" navigation/>
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image style={styles.tinyLogo} source = {require("../images/profilePic.jpeg")}/>
                </View>

                <View style={styles.informationContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>Username</Text>
                        <TextInput style={styles.values}>{username}</TextInput>
                    </View>
                    


                    <HoriLine/>

                    <View style={styles.horizontalBar}>
                        <View style={styles.textContainer}>
                            <Text style={styles.heading} >First Name </Text>
                            <TextInput style={styles.values} >{firstName} </TextInput>

                        </View>
                        <View >
                            <Text style={styles.heading} >Last Name</Text>
                            <TextInput style={styles.values} >{lastName} </TextInput>
                        </View>
                    </View>

                    <HoriLine/>
                    
                    <View style={styles.horizontalBar}>
                        <View style={styles.textContainer}>
                            <Text style={styles.heading} >Email</Text>
                            <TextInput style={styles.values} >{email} </TextInput>
                        </View>

                        <Image style={styles.smallImages} source={require("../images/envelope.png")}/>
                    </View>

                    <HoriLine/>
                    <View style={styles.horizontalBar}>
                        <View style={styles.textContainer}>
                            <Text style={styles.heading} >Phone #</Text>
                            <TextInput style={styles.values} >{phoneNum}</TextInput>
                        </View>

                        <Image style={{alignSelf:"center",position: 'absolute', right: 25, height:30 , resizeMode:"contain"}} source={require("../images/phone_icon.png")}/>
                        {/* <Image style={styles.smallImages} source={require("../images/phone_icon.png")}/> */}

                    </View>
                    
                    <HoriLine/>



                    <View style={styles.horizontalBar}>

                    <View style={styles.textContainer}>
                        <Text style={styles.textPart1}></Text>
                        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
                            <Text style={{color:"#4F2F24",fontSize:18,letterSpacing:1,fontWeight:"700"}}>Change Password</Text>
                        </TouchableOpacity>
                    </View>

                        {/* <View style={{marginLeft:"4%"}}>
                            <Text style={styles.heading} >Change Password</Text>

                        </View> */}

                        <Image style={{alignSelf:"center",marginTop:"2%", position: 'absolute', top:10, right: -10, height:40 , resizeMode:"contain"}} source={require("../images/check_icon.png")}/>

                        {/* <Image style={styles.smallImages} source={require("../images/check_icon.png")}/> */}
                    </View>

                </View>

            </View>


        </View>
    );

}

const HoriLine = () =>(
    <View style={{height:1.5, width:"93%",alignSelf:"center", backgroundColor:"#5c3b28", marginTop:"1%"}}></View>
);

const styles = StyleSheet.create({

    textPart1:{
        // marginTop:"20%",
    },
    smallImages:{

        alignSelf:"center",
        position: 'absolute', 
        right: 10, 
        height:25 , 
        resizeMode:"contain",
    },

    textContainer:{
        marginLeft:"7%",
        marginTop:0,
    },
    values:{ 
        fontSize:18,
        fontWeight:'700', 
        color:"#88694b", 
        marginLeft:10,
        letterSpacing:1,
        marginBottom:"2%",
    },
    heading:{
        color:"#4F2F24",
        fontSize:22,
        letterSpacing:1,
        fontWeight:"700",
        marginRight:"18%",
        // marginLeft:"4%",
        marginTop:"2%",

    },

    horizontalBar:{
        flexDirection:"row"
    },

    informationContainer:{
        width: "90%",
        height:"48%",
        alignSelf:"center",
        backgroundColor:"#f1cbae",
        marginTop:"5%",
        borderRadius:13,
        },
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#5c3b28",
        alignContent:"center",
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        height:"20%",
    },
    tinyLogo : {
        marginTop: "5%",
        width: "40%",
        resizeMode:"contain",
        borderRadius:200,
    }
});


export default MyProfile;
