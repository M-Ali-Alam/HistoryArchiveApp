import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Drawer } from 'react-native-paper';



const HoriLine = () =>(
    <View style={{height:1.5, width:"93%",alignSelf:"center", backgroundColor:"#5c3b28", marginTop:"1%"}}></View>
);

export function DrawerContent(props){
    return(
        // <View style={styles.upperLayer}>
            <View style={styles.container} >

                    <View  style={styles.gap1} ></View>
                    
                    <Image style={styles.tinyLogo} source = {require("../../images/profilePic.jpeg")}/>

                    <Text style={styles.name} >Muhammad Ali Alam</Text>

                    <Text style={styles.email}>joker@gmail.com</Text>

                    <HoriLine/>
                    <DrawerContentScrollView { ...props}>
                    <Drawer.Section style={styles.drawerContent} >
                        <DrawerItem style={styles.button} label="My Profile" OnPress={() => {props.navigation.navigate("MyProfile")}} />

                        <DrawerItem style={styles.button} label="My Articles" OnPress={() => {props.navigation.navigate("MyArticles")}} />

                        <DrawerItem style={styles.button} label="Moderator Panel" OnPress={() => {props.navigation.navigate("MyArticles")}} />

                        <DrawerItem style={styles.button} label="Log Out" OnPress={() => {}} />
                    </Drawer.Section>
                </DrawerContentScrollView>
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    upperLayer:{
        width:"130%",
        height:"100%",
        backgroundColor:"#EAB79B",
    },
    button:{
        backgroundColor:"#EAB79B",
        width:"90%",
        color:"#4F2F24",
        fontWeight:"bold",
        alignSelf:"center",
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
    },


})