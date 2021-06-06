import React from "react";
import { StyleSheet, TouchableOpacity,SafeAreaView, Text, View, ScrollView, TextInput } from "react-native";

// importing component
import Header from "./header";
import MyButton from "./Components/MyButtons"

const EditArticle = (props) => {
  const [text, onChangeText] = React.useState(props.mainText);

    return (
        <View style={styles.container}>
          <Header content="Edit Article" navigation />
            <View style={styles.scrollContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.eventName}>
                  <TextInput style={styles.eventText} value={props.eventName} />
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} value={props.authorName} />
                </View>

                <View style={styles.author}>
                  <TextInput style={styles.eventText} value={props.date} />
                </View>

                <View style={styles.location}>
                  <TextInput style={styles.eventText} value={props.location} />
                </View>
                <SafeAreaView style={styles.textContainer}>
                    <TextInput style={styles.Text} value={text} multiline={true}/>
                </SafeAreaView>
              </ScrollView>
            </View>
          <MyButton style={styles.buttonsContainer0} content={"Save Changes"} />
        </View>
      );
};

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:"#F1CBAE",
    borderRadius:15,
    marginBottom:10,
    padding:10,
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
});

export default EditArticle;
