import React from "react";
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Text, ScrollView, View} from "react-native";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons'; 
import tokenTypeContext from "../context/tokenType";

// importing component
import Header from "./header";

const ViewArticle = ({navigation}, props) => {

  const {token,setToken,type,setType} = React.useContext(tokenTypeContext);

    const Edit = () => {
        if(type == 0 || type == 1 || type == 2){
            return(
                <MaterialCommunityIcons name="pencil" size={30} style={styles.icon} color="#4F2F24" onPress={() => navigation.navigate("EditArticle",{
                  article:props.article
                })}/>
            )
        }else{
            return(<View></View>)
        }
    }

    const Trash = () => {
      if(type == 0 || type == 1 || type == 2){
        return(
          <FontAwesome5 name="trash" size={36} color="#4F2F24" onPress={() => alert("Are you srue you want to delete this article?") }/>
        )
      }else{
        return(<View></View>)
      }
    }

  return (
    <View style={styles.container}>
        <Header content={props.article.eventName} navigation />
        <View style={styles.scrollContainer}>
         <ScrollView style={{flex:1}}>
            <View style={styles.imgContainer}>
              <ImageBackground source={require("../images/mountains.png")} style={styles.img}>
                  <Edit/>

              </ImageBackground>
            </View>            

            <View style={{flexDirection:"row"}}>
              <View style={{flex:3}}>
                <Text style={styles.author}>By: {props.article.authorName}</Text>
                <Text style={styles.location}>Location: {props.article.location}</Text>
              </View>
            <View style={{flexDirection:"row-reverse",marginLeft:"5%", alignSelf:"center",flex:1}}>
              <Trash/>
            </View>
            </View>

            <Text style={styles.details}>Details</Text> 

            <Text style={styles.text}>{props.article.mainText}</Text>
            
        </ScrollView>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details:{
    marginTop:10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft:"5%",
    fontSize:20,
    color:"#4F2F24",
  },

  location:{
    marginTop:10,
    fontSize:20,
    color:"#4F2F24",
    marginLeft:"7%",
  },
  author:{
    marginTop:18,
    fontWeight:"bold",
    fontSize:24,
    color:"#4F2F24",
    marginLeft:"7%",
  },
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
    flex:1,
  },
  text: {
    width:"90%",
    marginTop:10,
    fontSize: 18,
    color:"#4F2F24",
    marginLeft:"5%",

  },
  scrollContainer:{
    marginTop:"5%",
    alignSelf:"center",
    backgroundColor: '#F1CBAE',
    width:"93%",
    flex:1,
  },
  imgContainer:{
    marginTop:"5%",
    alignSelf:"center",
    alignItems:"center",
    width:"90%",
    height:220,
  },
  img:{
    resizeMode:"contain",
    height:"100%",
    width:"100%",
    flexDirection:"row-reverse",
  },
  icon:{
    margin:10,
  },

});

export default ViewArticle;
