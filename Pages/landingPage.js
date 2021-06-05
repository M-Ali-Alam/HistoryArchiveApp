import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MyButton from "./Components/MyButtons"

const horseLocation = "../images/HorsePainting0.jpg";

export const userTypeContext = React.createContext('guest');

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={require(horseLocation)} style={styles.image}>
      <Text style={styles.heading}>Welcome</Text>

      <MyButton style={styles.buttonsContainer0} content={"Continue as Guest"} changeTo = {"HomePage"} />

      <MyButton style={styles.buttonsContainer1} content={"Sign in"} changeTo = {"SignIn"} />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  heading: {
    fontSize: 48,
    fontWeight: "800",
    position: "absolute",
    top: 150,
    alignSelf: "center",
    color: "#f1cbae",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer0: {
    position: "absolute",
    bottom: 150,
  },
  buttonsContainer1: {
    position: "absolute",
    bottom: 70,
  },

  buttons: {
    fontSize: 22,
    paddingVertical: 5,
    textAlign: "center",
    alignContent: "center",
    color: "#4f2f24",
  },
});

export default LandingPage;
