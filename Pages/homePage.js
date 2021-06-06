import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, FlatList, BackHandler } from "react-native";
import tokenTypeContext from "../context/tokenType";
import Slider from "@react-native-community/slider";

// importing component
import Header from "./header";
import TimeLine from "./Components/timeline";
import MiniArticle from "./Components/miniArticle";
import HeaderMenu from "./Components/headerMenu";

const Gap = () => {
    return <View style={{ height: 20 }}></View>;
};

const HomePage = ({ navigation }) => {
    const [year, setYear] = useState("2009");
    const [viewYear, setviewYear] = useState("2009");
    const [res, setRes] = useState(null);

    const { token, setToken, type, setType } = React.useContext(tokenTypeContext);

    const ShowButton = () => {
        if (type == 0 || type == 1 || type == 2) {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.plusButtonImg}
                    onPress={() => navigation.navigate("CreateNewArticle")}
                >
                    <Image source={require("../images/plusButton.png")} style={styles.img} />
                </TouchableOpacity>
            );
        } else {
            return <View></View>;
        }
    };

    const Icons = () => {
        if (type == 0 || type == 1 || type == 2) {
            return <HeaderMenu navigation />;
        } else {
            return <Header content="HomePage" navigation />;
        }
    };

    useEffect(() => {

        fetch("https://historyarchiveapi.herokuapp.com/article/view", {
            method: "POST",
            body: JSON.stringify({
                token: token,
                filter: 0,
                value: year,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.header["error"] != 0) {
                    setRes(null);
                } else {
                    setRes(json.body);
                }
            })
            .catch((error) => {
                console.error(error);
            });

            BackHandler.addEventListener('hardwareBackPress', () => true)
            return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)

    }, [year]);

    return (
        <View style={styles.container}>
            <Icons />
            <View style={styles.circle}>
                <Text style={styles.yearText}>{viewYear}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={1600}
                maximumValue={new Date().getFullYear()}
                minimumTrackTintColor="#E7CCB2"
                maximumTrackTintColor="#B9926E"
                thumbImage={require("../images/sliderThumb.png")}
                value={2009}
                step={1}
                onValueChange={(item) => {
                    setviewYear(item);
                }}
                onSlidingComplete={(item) => {
                    setYear(item.toString());
                }}
            />
            <View style={{ height: "74%" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(res) => res._id.toString()}
                    style={styles.scroll}
                    data={res}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                activeOpacity={1}
                                onPress={() => navigation.navigate("ViewArticle", { article: item })}
                            >
                                <MiniArticle navigation article={item} />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

            <ShowButton />
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
    img: {
        height: 60,
        resizeMode: "contain",
    },
    slider: {
        paddingTop: 10,
        marginTop: 15,
    },
    circle: {
        marginTop: 15,
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#B9926E",
        backgroundColor: "#F1CBAE",
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: "center",
    },
    yearText: {
        fontSize: 32,
        textAlign: "center",
    },
});

export default HomePage;