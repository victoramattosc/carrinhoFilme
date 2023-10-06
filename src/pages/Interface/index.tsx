import { View, Text, FlatList, VirtualizedList, Image } from "react-native";
import { useRef } from "react";

type Props = {
  categoria: string,
  filmes: {nome: string, descricao: string, preco: number, img: string}[],
}


export default function Interface({categoria, filmes}: Props) {
  return (
    <>

    </>
  );
}
