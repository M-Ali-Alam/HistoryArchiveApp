import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Drawer } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HoriLine = () =>(
    <View style={{height:1.5, width:"93%",alignSelf:"center", backgroundColor:"#5c3b28", marginTop:"2%",marginBottom:"2%"}}></View>
);

export function DrawerContent(props){

    const navigation = useNavigation();

    return(
        // <View style={styles.upperLayer}>
            <View style={styles.container} >

                <View  style={styles.gap1} ></View>
                
                <Image style={styles.tinyLogo} source = {require("../../images/profilePic.jpeg")}/>

                <Text style={styles.name} >Muhammad Ali Alam</Text>

                <Text style={styles.email}>joker@gmail.com</Text>

                <HoriLine/>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("MyProfile")}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("MyArticles")}>My Articles</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("MyArticles")}>Moderation Panel</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("Logout")}>Log out</Text>
                </TouchableOpacity>

            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    upperLayer:{
        width:"125%",
        height:"100%",
        backgroundColor:"#EAB79B",
    },
    button:{
        backgroundColor:"#EAB79B",
        width:"90%",
        color:"#4F2F24",
        fontWeight:"bold",
        alignSelf:"center",
        height:45,
        justifyContent:"center",
        marginTop:"3.5%",
        borderRadius:8,

    },
    buttonText:{
        marginLeft:13,
        fontSize:20,
        color:"#4F2F24"
    },
    gap1:{
        height:"7%",
        width:"100%",

    },
    container:{
        backgroundColor:"#F1CBAE",
        height:"100%",
        // width:"80%",
        flex:1,
    },
    tinyLogo : {
        width: "100%",
        height:"20%",
        resizeMode:"contain",
        borderRadius:200,
        alignSelf:"center",
    },
    name:{
        marginTop:"2%",
        color:"#4F2F24",
        marginBottom:"2%",
        fontSize: RFPercentage(4),
        alignSelf:"center",
        justifyContent:"center",
        textAlign:"center",
    },
    email:{
        marginBottom:"3%",
        fontSize: RFPercentage(2.2),
        textAlign:"center",
        color:"#4F2F24",
    },


})