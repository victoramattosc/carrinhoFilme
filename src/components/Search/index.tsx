/*import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props) {
    return (
            <View style={styles.search}>
                <Feather
                    name="search"
                    size={25}
                    color="#B22222"
                    style={styles.iconsearch}
                />
                <TextInput
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                    placeholder="O que você está procurando?"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.searchtext}
                ></TextInput>
            </View>
            );
}


const styles = StyleSheet.create({
search: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    alignSelf: "center",
    height: 40,
    width: 320,
    borderRadius: 25,
  },
  iconsearch: {
    marginLeft: 10,
    alignSelf: "center",
  },
  searchtext: {
    fontFamily: "DRegular",
    width: 260,
    textAlign: "center",
  },

});
*/