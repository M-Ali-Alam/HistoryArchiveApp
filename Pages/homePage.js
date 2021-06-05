import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, FlatList } from "react-native";

// importing component
import Header from "./header";
import TimeLine from "./Components/timeline";
import MiniArticle from "./Components/miniArticle";

const Gap = () => {
  return <View style={{ height: 20 }}></View>;
};

const HomePage = (props) => {
    const [year, setYear] = useState("2009");
    const [res, setRes] = useState(null);

    useEffect(() => {
        fetch("https://historyarchiveapi.herokuapp.com/article/view", {
            method: "POST",
            body: JSON.stringify({
              token:props.token,
                // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmIyMmY4NzJhMWEwMDAxNTM1Y2NiNyIsInVzZXJuYW1lIjoibWFsaWFsYW0iLCJpYXQiOjE2MjI5MDAwMTR9.IoMDAFoQIsVZsNuDsWMQpMbChXw1Q6Guh_lLdamIUX0",
                filter: 0,
                value: year,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json.header["error"]);
                if (json.header["error"] != 0) {
                    setRes(null);
                } else {
                    setRes(json.body);
                    console.log(json.body[0]);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [year]);

    return (
        <View style={styles.container}>
            <Header content="HomePage" navigation />

            <FlatList
                keyExtractor={(res) => res._id.toString()}
                style={styles.scroll}
                data={res}
                renderItem={({ item }) => {
                    return <MiniArticle article={item} />;
                }}
            />

            <TouchableOpacity activeOpacity={0.5} style={styles.plusButtonImg} onPress={() => props.navigation.navigate("CreateNewArticle")}>
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
    scroll: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 50,
        marginTop: 10,
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

export default HomePage;