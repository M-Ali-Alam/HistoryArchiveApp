import React from "react";
import { StyleSheet,ScrollView,Image, TouchableOpacity, Text, View } from "react-native";
import tokenTypeContext from "../context/tokenType";

// importing component
import Header from "./header";
import MiniArticle from "./Components/miniArticle";
import { useEffect } from "react/cjs/react.development";

const Gap = () => {
    return(
        <View style={{height:20}}></View>
    )
};
const GetData = async() => {

  const {token,setToken,type,setType} = React.useContext(tokenTypeContext);
  const [res, setRes] = useState(null);


  try{
    await fetch("https://historyarchiveapi.herokuapp.com/api/article/view", {
      method:'POST',
      body: JSON.stringify({
        token:token,
        filter:1,
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
        if ( json.header["error"] != 0 ){
          console.log(`${json.header.message}`)
          setRes(null)
        }else{
          setRes(json.body)
        }
      }).catch((error) => {
        console.error(error);
      });
    }catch (error){
      console.log(error);
    }
}

const MyArticles = () => {

  useEffect(() => {
    GetData();
  },[])


  return(
  <View style={styles.container}>
    <Header content="My Articles" navigation />
      <View style={{height:"92%"}} >
        <FlatList showsVerticalScrollIndicator={false}
          keyExtractor={(res) => res._id.toString()}
          style={styles.scroll}
          data={res}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={() => navigation.navigate("ViewArticle", {
                article= {item}
              })} >
                <MiniArticle navigation article={item}/>
              </TouchableOpacity>
              );
            }}
        />
      </View>

      <TouchableOpacity activeOpacity={0.5} style={styles.plusButtonImg} onPress={() => navigation.navigate("CreateNewArticle")}>
        <Image source={require("../images/plusButton.png")} style={styles.img} />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
  },
  scroll:{
      width:"90%",
      alignSelf:"center",
  },
  plusButtonImg: {
    position: "absolute",
    bottom: 30,
    right: "-7%",
    resizeMode: "contain",
    height: 60,
  },
  img:{
    height:60,
    resizeMode:"contain",
  }
});

export default MyArticles;
