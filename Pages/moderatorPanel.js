import React from "react";
import {useState, useEffect} from "react";
import { StyleSheet,ScrollView,Image, TouchableOpacity, Text, View, FlatList } from "react-native";
import { Entypo, AntDesign  } from '@expo/vector-icons';

// importing component
import Header from "./header";
import ActiveUser from "./Components/activeUser"
import InactiveUser from "./Components/inactiveUser"


const Gap = () => {
    return(
        <View style={{height:10}}></View>
    )
};



const ModeratorPanel = (props) => {

  const Check = ({userType})=>{
    if(userType == 2){
      return (
        <View style={styles.iconContainer}>
        <View style={styles.icons}>
        <TouchableOpacity activeOpacity={0.5}>
        <AntDesign name="like1" size={32} color="#4F2F24" />
        </TouchableOpacity>
        </View>
        <View style={styles.icons}>
        <TouchableOpacity activeOpacity={0.5}>
        <Entypo name="block" size={32} color="#4F2F24" />        
        </TouchableOpacity>
        </View>
        <View style={styles.icons}>
        <TouchableOpacity activeOpacity={0.5}>
        <Entypo name="warning" size={32} color="#4F2F24" />
        </TouchableOpacity>
        </View>
        </View>
        );
    }else if(userType == 1){
      return (
        <View style={styles.iconContainer}>
        <View style={styles.icons}>
        <Entypo name="warning" size={32} color="#4F2F24"  />
        </View>
        <View style={styles.icons}>
        <AntDesign name="dislike1" size={32} color="#4F2F24" />
        </View>
        </View>
        );
    }else{
      return(
        <View style={styles.iconContainer}>
        <View style={styles.icons}>
        </View>
        <View style={styles.icons}>
        </View>
        </View>
              );
    }

  }
//  const [res, setRes] = useState(null);
  const [activeUsers, setactive] = useState(null);
  const [bannedUsers, setbanned] = useState(null);
//  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjkyNjZkNDM3ZTI2MGRkOGQwYmY0MCIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MjI3NDY3Njl9.bkqC-mBRUNwyz40vNujzl0eOednyPEa51goIYZRfAhM');
useEffect( () => {
        try{
            fetch("https://historyarchiveapi.herokuapp.com/moderator/fetchusers", {
              method:'POST',
              body: JSON.stringify({
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjkyNjZkNDM3ZTI2MGRkOGQwYmY0MCIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MjI3NDY3Njl9.bkqC-mBRUNwyz40vNujzl0eOednyPEa51goIYZRfAhM"
              }),
              headers: {
                'Content-Type':
                'application/json',
              },
              }).then((response) => response.json())
              .then((json) => {
                console.log(json.header["error"]);
                if (json.header["error"] != 0) {
                  setactive(null);
                  setbanned(null);
                } else {
                  console.log(json.body.activeUsers);
                  setactive(json.body.activeUsers);
                  setbanned(json.body.bannedUsers);
                }
              })
            }catch (error){
                console.log(error);
            }       
      }, []
      );

  return(
    
  <View style={styles.container}>
      <Header content="ModeratorPanel" navigation />

      <Text style={styles.textcontainer}>ACTIVE USERS</Text> 

      <View style={styles.scrollContainer}>
      <FlatList
          keyExtractor={(activeUsers) => activeUsers.userId.toString()}
          style={styles.list}
          data={activeUsers}
          renderItem={({ item }) => {
            return (
              <View style={styles.contentContainer}>
                <Gap />
                <Image source={require("../images/profilePic.jpeg")} style={styles.img}>
                </Image>
                <Text style={styles.person}>{item.username}</Text>
                <Check userType = {item.userType}/>
                <Gap />
              </View>
              );}
            }
          />
      </View>


      <Gap/>
      <Gap/>
      <Gap/>

      <Text style={styles.textcontainer}>BANNED USERS</Text> 

      <View style={styles.scrollContainer2}>
      <FlatList
          keyExtractor={(bannedUsers) => bannedUsers.userId.toString()}
          style={styles.list}
          data={bannedUsers}
          renderItem={({ item }) => {
            return (
              <View style={styles.contentContainer}>
                <Gap/>
                <Image source={require("../images/profilePic.jpeg")} style={styles.img}>
                </Image>
                <Text style={styles.person2}>{item.username}</Text>
                <View style={styles.iconContainer}>
              <View style={styles.icons}>
              <TouchableOpacity activeOpacity={0.5}>
              <Entypo name="reply" size={40} color="#4F2F24" />
              </TouchableOpacity>
              </View>
              </View>
              <Gap/>
              </View>
              );}
            }
          />
          </View>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
  },

  textcontainer: {
    top: 15,
    height: 50,
    backgroundColor: "#F1CBAE",
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#5C3B28",
  },
  scrollContainer:{
      top: 25,
    width: "100%",
    height: "30%",
    backgroundColor: "#F1CBAE",
  },
  scrollContainer2:{
      top: 30,
    width: "100%",
    backgroundColor: "#F1CBAE",
    height: "24%",
  },

  scroll:{
      top: 5,
      width:"95%",
      alignSelf:"center",
  },
  contentContainer:{
    flex:1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  iconContainer:{
    flex:1, 
    flexDirection: 'row-reverse'
  },

  person:{
    fontSize:24,
    marginLeft:"5%",
    textAlignVertical: "center",
    color:"#4F2F24",
  },

  person2:{
    fontSize:24,
    marginLeft:"5%",
    textAlignVertical: "center",
    color:"#4F2F24",
    fontWeight: "bold",
  },
  img:{
    width: 60,
    height: 60 ,
    marginLeft: "5%",
    borderRadius : 200  },
  icons:{
    marginRight: "5%",
    justifyContent: 'center',
  },
  list: {
   // marginBottom: 50,
    //marginTop: 10,
    // flex: 1,
  }
});

export default ModeratorPanel;