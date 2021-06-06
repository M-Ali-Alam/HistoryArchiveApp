import React, {useState} from "react";
import { StyleSheet, TouchableOpacity,SafeAreaView, Text, View, ScrollView, TextInput } from "react-native";
import { cos } from "react-native-reanimated";
import tokenTypeContext from "../context/tokenType";
import { useNavigation } from '@react-navigation/native';

// importing component
import Header from "./header";

const EditArticle = ( {route} ) => {

  const navigation = useNavigation();

  const {token,setToken,type,setType} = React.useContext(tokenTypeContext);

  const [text,setText] = useState(route.params.article.mainText);
  const [ename,setEName] = useState(route.params.article.eventName);
  const [title,setTitle] = useState(route.params.article.title);
  const [articleDate,setDate] = useState(route.params.article.date);
  const [eventLocation,setLocation] = useState(route.params.article.location);

  console.log("EditArticle")
  console.log("EditArticle")
  console.log("EditArticle")
  console.log(route)
  console.log("EditArticle")
  console.log("EditArticle")
  console.log("EditArticle")

  const handleSubmitButton = async() => { 
    if(!text){
      console.log('Please enter descriptoin of the event');
      return;
    }
    if(!ename){
      console.log('Please enter the name of the event');
      return;
    }

    if(!title){
      console.log('Please enter the name of the title');
      return;
    }

    if(!articleDate){
      console.log('Please enter the date of the event');
      return;
    }

    if(!eventLocation){
      console.log('Please enter the loaction of the event');
      return;
    }
    try{

      route.params.article.mainText = text
      route.params.article.eventName = ename
      route.params.article.title = title
      route.params.article.date = articleDate.substring(0, 4);
      route.params.article.location = eventLocation
    }catch(e){
      console.log("Error at line 62")
      console.error(e)
    }


    try{
      console.log("article ID")
      // console.log(route.params.article.authorID)
      console.log(route.params.article._id)
      await fetch("https://historyarchiveapi.herokuapp.com/article/edit", {
        method:'POST',
        body: JSON.stringify({
          token:token,
          article:{
            _id:`${route.params.article._id}`,
            authorID:route.params.article.authorID,
            eventName:route.params.article.eventName,
            title:route.params.article.title,
            date:`${route.params.article.date}`,
            location:eventLocation,
            mainText:route.params.article.mainText,
            image:route.params.article.image
          }
        }),
        headers: {
          'Content-Type':
          'application/json',
        },
        }).then((response) => response.json())
        .then((json) => {
          if (!Object.keys(json.body).length){
            console.error(json.header)
          }else{
            navigation.push("DrawerScreen")
          }
        }).catch((error) => {
          console.log("Error at line 97")
          console.error(error);
        });
      }catch (error){
        console.log("Error at line 101")
        console.error(error);
      }
  }

    return (
        <View style={styles.container}>
          <Header content="Edit Article" navigation />
            <View style={styles.scrollContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.eventName}>
                  <TextInput style={styles.eventText} placeholder={"Event Text"} value={ename} onChangeText={(tempEventName) => setEName(tempEventName)}/>
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} placeholder={"Title"} value={title} onChangeText={(tempAuthorName) => setTitle(tempAuthorName)}/>
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} placeholder={"Date"} value={articleDate} onChangeText={(tempDate) => setDate(tempDate)}/>
                </View>

                <View style={styles.location}>
                  <TextInput style={styles.eventText} placeholder={"Location"} value={eventLocation} onChangeText={(templocation) => setLocation(templocation)} />
                </View>
                <SafeAreaView style={styles.textContainer}>
                    <TextInput style={styles.Text} placeholder={"The content of the article"} value={text} multiline={true} onChangeText={(tempMainText) => setText(tempMainText)} />
                </SafeAreaView>
              </ScrollView>
            </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.buttonsContainer} onPress={() => handleSubmitButton()}>
            <Text style={styles.buttons}>Save Changes</Text>
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
    width:"80%",
    width:"100%",
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

export default EditArticle;
