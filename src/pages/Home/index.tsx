import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import topo from "../../../assets/logoFilms.png";
import alternativo from "../../../assets/alternativeLogo.png";
import besouro from "../../../assets/Filmes/besouroAzul.jpg";
import missao from "../../../assets/Filmes/missaoImpossivel.jpg";
import guardioes from "../../../assets/Filmes/guardioes.jpg";

import Feather from "@expo/vector-icons/Feather";
import Toolbar from "../../components/Toolbar";
import Alta from "../../components/Filmes/Alta";
import Lancamentos from "../../components/Filmes/Lancamentos";
import Classicos from "../../components/Filmes/Classicos";
/*import Interface from "../Interface";*/

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Toolbar />

      <ScrollView>
        <Image source={alternativo} style={styles.topo} />

        <View style={styles.carrinho}>
          <View style={styles.search}>
            <Feather
              name="search"
              size={25}
              color="#B22222"
              style={styles.iconsearch}
            />
            <TextInput
              placeholder="O que você está procurando?"
              style={styles.searchtext}
            ></TextInput>
          </View>
          <Text style={styles.nome}>Assista onde e como quiser</Text>
          <Text style={styles.sobrenome}>Confira nosso catálogo:</Text>

          {/*<Data/>*/}

          <Alta />

          <Lancamentos />

          <Classicos />

          {/* Começo Filmes */}

          <Text style={styles.nome}>Confira nossas promoções</Text>
          <Text style={styles.sobrenome}>Só aqui no Somewere Films:</Text>

          <View style={styles.container}>
            <View style={styles.filme}>
              <Text style={styles.nomefilme}>Besouro Azul</Text>
              <Image source={besouro} style={styles.imgfilme} />
            </View>

            <Text style={styles.descricao}>
              O adolescente Jaime Reyes ganha superpoderes quando um misterioso
              escaravelho se prende à sua coluna e lhe fornece uma poderosa
              armadura alienígena azul.
            </Text>
            <Text style={styles.precoAntigo}>R$60,00</Text>
            <Text style={styles.preco}>R$59,99</Text>
          </View>

          {/* Espaço */}

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
            <Text style={styles.precoAntigo}>R$60,00</Text>
            <Text style={styles.preco}>R$59,99</Text>
          </View>

          {/* Espaço */}

          <View style={styles.container}>
            <View style={styles.filme}>
              <Text style={styles.nomefilme}>Missão Impossível 7</Text>
              <Image source={missao} style={styles.imgfilme} />
            </View>

            <Text style={styles.descricao}>
              Ethan Hunt, agente do FMI, aventura-se novamente em "Missão
              Impossível - Acerto de Contas Parte 1", sétimo longa da série de
              filmes "Missão Impossível".
            </Text>
            <Text style={styles.precoAntigo}>R$60,00</Text>
            <Text style={styles.preco}>R$59,99</Text>
          </View>

          {/* Fim Filmes */}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (200 / 500) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: "DBold",
  },
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
  container: {
    marginBottom: 20,
    backgroundColor: "#3B3A39",
    borderRadius: 25,
    padding: 25,
  },
  nome: {
    marginTop: 10,
    fontSize: 24,
    lineHeight: 42,
    color: "#EEEE",
    fontFamily: "DBold",
    alignSelf: "center",
  },
  sobrenome: {
    fontSize: 20,
    marginBottom: 10,
    color: "#EEEE",
    fontFamily: "DRegular",
    alignSelf: "center",
  },
  filme: {
    flexDirection: "column",
    paddingVertical: 10,
    alignItems: "center",
  },
  imgfilme: {
    width: 150,
    height: 250,
    marginBottom: 5,
    marginTop: 5,
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
  precoAntigo: {
    fontSize: 26,
    fontFamily: "DRegular",
    color: "#A3A3A3",
    marginTop: 10,
    alignSelf: "flex-end",
    textDecorationLine: "line-through",
  },
  preco: {
    fontSize: 26,
    fontFamily: "DRegular",
    color: "#EEE8AA",
    marginTop: 10,
    alignSelf: "flex-end",
  },
});
