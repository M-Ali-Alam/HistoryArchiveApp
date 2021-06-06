import React from "react";
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Text, ScrollView, View} from "react-native";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons'; 
import tokenTypeContext from "../context/tokenType";
import { useNavigation } from '@react-navigation/native';

// importing component
import Header from "./header";

const ViewArticle = ({ route } ) => {

  const navigation = useNavigation();

  const {token,setToken,type,setType} = React.useContext(tokenTypeContext);

    const Edit = (props) => {
        if(route.params.article.isEditable != undefined ){
            return(
                <MaterialCommunityIcons name="pencil" size={30} style={styles.icon} color="#4F2F24" onPress={() => navigation.navigate("EditArticle",{
                  article:props.article
                })}/>
            )
        }else{
            return(<View></View>)
        }
    }

    const deleteArticle = () => {

      try{
      fetch("https://historyarchiveapi.herokuapp.com/article/delete", {
        method:'POST',
        body: JSON.stringify({
          token:token,
          articleId:route.params.article._id
        }),
        headers: {
          'Content-Type':
          'application/json',
        },
        }).then((response) => response.json())
        .then((json) => {
          if ( json.header["error"] != 0 ){
          }else{
            navigation.navigate("DrawerScreen")
          }
        }).catch((error) => {
          console.error(error);
        });
      }catch (error){
        console.log(error);
      }
    }

    const Trash = () => {
      if(route.params.article.isDeletable != undefined ){
        return(
          <FontAwesome5 name="trash" size={36} color="#4F2F24" onPress={() => deleteArticle() }/>
        )
      }else{
        return(<View></View>)
      }
    }

  return (
    <View style={styles.container}>
        <Header content={route.params.article.eventName} navigation />
        <View style={styles.scrollContainer}>
         <ScrollView style={{flex:1}}>
            <View style={styles.imgContainer}>
              <ImageBackground source={{uri:`${route.params.article.image}`}} style={styles.img}>
                  <Edit article={route.params.article} />

              </ImageBackground>
            </View>            

            <View style={{flexDirection:"row"}}>
              <View style={{flex:3}}>
                <Text style={styles.author}>By: {route.params.article.authorName}</Text>
                <Text style={styles.location}>Location: {route.params.article.location}</Text>
              </View>
            <View style={{flexDirection:"row-reverse",marginLeft:"5%", alignSelf:"center",flex:1}}>
              <Trash/>
            </View>
            </View>

            <Text style={styles.details}>Details</Text> 

            <Text style={styles.text}>{route.params.article.mainText}</Text>
            
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
