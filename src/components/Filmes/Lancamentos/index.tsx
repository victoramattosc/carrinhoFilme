import { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";

import React from "react";

import { StyleSheet } from "react-native";


const DATA = [
  {
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg",
    name: "Megatubarão 2",
  },
  {
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x0naXPYoLxzTzRgwKhzAjQPngnw.jpg",
    name: "As Tartarugas Ninjas: Caos Mutante",
  },
  {
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg",
    name: "Barbie",
  },
  {
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1FRIsFSl1AOpmpBIRnUFqO6U06A.jpg",
    name: "Gran Turismo - De Jogador a Corredor",
  },
  {
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dTGWmsQMcH5FwRqC3CS0qW3sbRZ.jpg",
    name: "Ruim pra Cachorro",
  },
];


export default function Lancamentos() {
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
    <>
    <Text style={{fontFamily: 'DBold', color: 'white', marginBottom: 10}}>
      Lançamentos:
    </Text>
    <View
      style={{
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#3B3A39",
        borderRadius: 25,
        padding: 25,
      }}
    >
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: 120,
              alignItems: "center",
              height: 180,
              marginHorizontal: 6.5,
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.imgfilme}
              resizeMode="contain"
            />
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    </>
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
});
