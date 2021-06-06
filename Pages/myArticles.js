import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, FlatList } from "react-native";
import tokenTypeContext from "../context/tokenType";

// importing component
import Header from "./header";
import MiniArticle from "./Components/miniArticle";

const Gap = () => {
    return <View style={{ height: 20 }}></View>;
};

const MyArticles = () => {
    const [res, setRes] = useState(null);
    const { token, setToken, type, setType } = React.useContext(tokenTypeContext);

    useEffect(() => {
        try {
            fetch("https://historyarchiveapi.herokuapp.com/article/view", {
                method: "POST",
                body: JSON.stringify({
                    token: token,
                    filter: 1,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.header["error"] != 0) {
                        console.log(`${json.header.message}`);
                        setRes(null);
                    } else {
                        setRes(json.body);
                        console.log(json);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Header content="My Articles" navigation />
            <View style={{ height: "92%" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(top) => top._id.toString()}
                    style={styles.scroll}
                    data={res}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                activeOpacity={1}
                                onPress={() =>
                                    navigation.navigate("ViewArticle", {
                                        article: item,
                                    })
                                }
                            >
                                <MiniArticle navigation article={item} />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.plusButtonImg}
                onPress={() => navigation.navigate("CreateNewArticle")}
            >
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
    },
    plusButtonImg: {
        position: "absolute",
        bottom: 30,
        right: "-7%",
        resizeMode: "contain",
        height: 60,
    },
    img: {
        height: 60,
        resizeMode: "contain",
    },
});

export default MyArticles;
