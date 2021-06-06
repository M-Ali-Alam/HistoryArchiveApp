import React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Gap = () => {
  return <View style={{ height: 20 ,backgroundColor:"#5C3B28"}}></View>;
};

const MiniArticle = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <Gap/>
            <View style={styles.imgContainer}>
                <ImageBackground source={{uri:`${props.article.image}`}} style={styles.img}>
                </ImageBackground>
            </View>

            <Text style={styles.eventName}>{props.article.eventName}</Text>
            <Text style={styles.author}>By: {props.article.authorName}</Text>
            <Text style={styles.location}>Location: {props.article.location}</Text>

            <Text style={styles.text} numberOfLines={4}>{props.article.mainText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F1CBAE",
    },
    author: {
        marginLeft: "5%",
        fontSize: 15,
        fontSize: 18,
        paddingTop: 2,
        color: "#4F2F24",
    },
    eventName: {
        paddingTop: 3,
        marginLeft: "5%",
        fontSize: 24,
        fontWeight: "bold",
        color: "#4F2F24",
    },
    location: {
        paddingTop: 3,
        marginLeft: "5%",
        fontSize: 20,
        color: "#4F2F24",
    },
    text: {
        paddingTop: 3,
        marginLeft: "5%",
        marginRight: "3%",
        color: "#4F2F24",
        paddingBottom: 10,
    },
    imgContainer: {
        marginTop: "5%",
        alignSelf: "center",
        alignItems: "center",
        width: "90%",
        height: 220,
    },
    img: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        flexDirection: "row-reverse",
    },
    icon: {
        margin: 10,
        height: 30,
    },
});

export default MiniArticle;