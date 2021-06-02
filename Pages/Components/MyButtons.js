import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const MyButton = (props) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.buttonsContainer, {...props.style}]}>
      <Text style={styles.buttons} onPress={() => navigation.navigate(`${props.changeTo}`)}>{`${props.content}`}  </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    height: 50,
    backgroundColor: "#f1cbae",
    borderRadius: 10,
    justifyContent: "center",

    alignSelf: "center",
    width: "80%",
  },
  buttons: {
    fontSize: 28,
    paddingVertical: 5,
    textAlign: "center",
    alignContent: "center",
    color: "#4f2f24",
  },
});

export default MyButton;
