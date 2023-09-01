import React from "react";
import { StyleSheet, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";

export default function Toolbar() {
  return (
    <View style={styles.toolbar}>
      <Feather
        name="menu"
        size={25}
        color="#B22222"
        style={styles.icontoolbar}
      />
      <Feather
        name="bell"
        size={25}
        color="#BBB6B6"
        style={styles.icontoolbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    height: 50,
    backgroundColor: "#1C1C1C",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "center",
  },
  icontoolbar: {
    justifyContent: "center",
    display: "flex",
    marginRight: 15,
    marginLeft: 15,
  },
});
