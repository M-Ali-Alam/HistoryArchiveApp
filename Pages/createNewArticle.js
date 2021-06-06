import React from "react";
import { StyleSheet, TouchableOpacity,SafeAreaView, Text, View, ScrollView, TextInput } from "react-native";
import tokenTypeContext from "../context/tokenType";


// importing component
import Header from "./header";

const CreateNewArticle = ({navigation}) => {

  const {token,setToken,type, setType} = React.useContext(tokenTypeContext);

  const [text, setText] = React.useState("");
  const [location,setLocation] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [title, settitle] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleSubmit = async () => {
    if(!text) {
     return 
    }
    if(!location){
      return
    }
    if(!eventName){
      return
    }
    if(!title){
      return
    }
    if(!date){
      return
    }

    try{
      let temp = {}
      temp.eventName = eventName
      temp.title = title
      temp.date = date
      temp.location = location
      temp.mainText = text

      await fetch("https://historyarchiveapi.herokuapp.com/article/createnew", {
        method:'POST',
        body: JSON.stringify({
          token:token,
          article:{
            eventName:eventName,
            title:title,
            date:date,
            location:location,
            mainText:text
          }
        }),
        headers: {
          'Content-Type':
          'application/json',
        },
        }).then((response) => response.json())
        .then((json) => {
          console.log("json.header")
          console.log("json.header")
          console.log("json.header")
          console.log("json.header")
          console.log("json.header")
          console.log("json.header")
          console.log(json)
          if ( json.header['error'] ){
            setError(`${json.header.message}`)
          }else{
            setToken(json.body.token)
            setType(json.body.userType)
            navigation.push("DrawerScreen")
          }
        }).catch((error) => {
          console.error(error);
        });
      }catch (error){
        console.log(error);
      }
  }

    return (
        <View style={styles.container}>
          <Header content="New Article" navigation />
            <View style={styles.scrollContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.eventName}>
                  <TextInput style={styles.eventText} placeholder={"Event Name"} onChangeText={(et) => setEventName(et)}/>
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} placeholder={"Title"} onChangeText={(an) => settitle(an)} />
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} placeholder={"Date"} onChangeText={(dt) => setDate(dt)} />
                </View>

                <View style={styles.location}>
                  <TextInput style={styles.eventText} placeholder={"Location"} onChangeText={(loc) => setLocation(loc)} />
                </View>
                <SafeAreaView style={styles.textContainer}>
                    <TextInput style={styles.Text} placeholder="The content of the article" multiline={true} onChangeText={(txt) => setText(txt)}/>
                </SafeAreaView>
              </ScrollView>
            </View>

          <TouchableOpacity activeOpacity={0.5} style={styles.buttonsContainer}>
            <Text style={styles.buttons} onPress={() => handleSubmit()}>Save Button</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:"#F1CBAE",
    borderRadius:15,
    marginBottom:10,
    padding:10,
    minHeight: 300,
  },
  text:{
    width:"100%",
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

  eventName:{
    width:"100%",
    height:50,
    backgroundColor:"#F1CBAE",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    marginBottom:10,
  },
  author:{
    width:"100%",
    height:50,
    backgroundColor:"#F1CBAE",
    marginBottom:10,
  },
  location:{
    width:"100%",
    height:50,
    backgroundColor:"#F1CBAE",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    marginBottom:10,
  },

  eventText:{
    fontSize:26,
    color:"#4F2F24",
    justifyContent:"center",
    height:"100%", 
    marginLeft:15,
  },
  scrollContainer:{
    alignSelf:'center',
    marginTop:30,
    marginBottom:30,
    width:"90%",
    height:"65%",
  },
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
  },
  buttonsContainer0: {
    width:"90%",
  },
});

export default CreateNewArticle;
