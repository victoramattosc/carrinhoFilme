import { View } from "react-native";
import datas from "./Data.json";

type IOpcao = typeof datas[0];

/*
interface IOpcao{
  id: number;
  label: string;
}
*/

export default function Data(data: IOpcao) {
  return (
    <View>
      {datas.map((data) => (
        <button key={data.id}>
          {data.nome}
        </button>
      )
      )}
    </View>
  );
}