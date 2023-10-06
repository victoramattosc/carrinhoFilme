import { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";

import React from "react";

import { StyleSheet } from "react-native";

type Props = {
  categoria: string,
  filmes: {img: string}[],
}


export default function Lancamentos({categoria, filmes}: Props) {
  return (
    <>
    <Text style={{fontFamily: 'DBold', color: 'white', marginBottom: 10}}>
      {categoria}
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
        data={filmes}
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
                uri: item.img,
              }}
              style={styles.imgfilme}
              resizeMode="contain"
            />
          </View>
        )}
        horizontal
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
