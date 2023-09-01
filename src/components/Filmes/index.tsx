import { useState, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { StyleSheet } from "react-native";

import besouro from "../../../assets/Filmes/besouroAzul.jpg";
import missao from "../../../assets/Filmes/missaoImpossivel.jpg";
import guardioes from "../../../assets/Filmes/guardioes.jpg";

const DATA = [
  {
    image: "../../../assets/Filmes/besouro.jpg",
    name: "Besouro Azul",
    descricao:
      "O adolescente Jaime Reyes ganha superpoderes quando um misterioso escaravelho se prende à sua coluna e lhe fornece uma poderosa armadura alienígena azul.",
    preco: "R$60,00",
  },
  {
    image: "../../../assets/Filmes/guardioes.jpg",
    name: "Guardiões da Galáxia",
    descricao:
      "Peter Quill deve reunir sua equipe para defender o universo e proteger um dos seus. Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões.",
    preco: "R$60,00",
  },
  {
    image: "../../../assets/Filmes/missao.jpg",
    name: "Missão Impossível 7",
    descricao:
      "Ethan Hunt, agente do FMI, aventura-se novamente em Missão Impossível - Acerto de Contas Parte 1, sétimo longa da série de filmes Missão Impossível",
    preco: "R$60,00",
  },
];

export default function Filmes() {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              width: Dimensions.get("screen").width * 0.08,
              alignItems: "center",
              height: 15,
              marginHorizontal: 3.8,
            }}
          >
            <Text
              style={{ fontFamily: "DBold", alignSelf: "center" }}
            >
              {item.name}
            </Text>
            <TouchableOpacity>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.imgfilme}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.descricao}>
              Ethan Hunt, agente do FMI, aventura-se novamente em "Missão
              Impossível - Acerto de Contas Parte 1", sétimo longa da série de
              filmes "Missão Impossível".
            </Text>
            <Text style={styles.preco}>R$60,00</Text>
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
/*
    <>
    <View style={styles.container}>
    <View style={styles.filme}>
      <Text style={styles.nomefilme}>Guardiões da Galáxia 3</Text>
      <Image source={guardioes} style={styles.imgfilme} />
    </View>

    <Text style={styles.descricao}>
      Peter Quill deve reunir sua equipe para defender o universo e
      proteger um dos seus. Se a missão não for totalmente bem-sucedida,
      isso pode levar ao fim dos Guardiões.
    </Text>
    <Text style={styles.preco}>R$60,00</Text>
  </View>
  </>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#3B3A39",
    borderRadius: 25,
    padding: 25,
  },
  filme: {
    flexDirection: "column",
    paddingVertical: 10,
    alignItems: "center",
  },
  imgfilme: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 8,
    /*
    width: 150,
    height: 250,
    marginBottom: 5,
    marginTop: 5,
    */
  },
  nomefilme: {
    fontSize: 16,
    fontFamily: "DBold",
    lineHeight: 26,
    color: "white",
  },
  descricao: {
    color: "#A3A3A3",
    fontFamily: "DItalic",
    textAlign: "justify",
  },
  preco: {
    fontSize: 26,
    fontFamily: "DRegular",
    color: "#EEE8AA",
    marginTop: 10,
    alignSelf: "flex-end",
  },

})
