/*import { View, Text, Image, FlatList, VirtualizedList } from "react-native";
import { useRef } from "react";

import { filmesData } from "../../Data/FilmesData";

export default function Interface() {
  const FlatlistRef = useRef<FlatList>(null);
  return (
    <>
      <FlatList
        keyExtractor={(item) => item.id}
        data={filmesData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Image
              source={{
                uri: item.img,
              }}
              styles={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
                borderRadius: 8,
              }}
              resizeMode="contain"
            />
            <Text>{item.desc}</Text>
          </View>
        )}
      />
    </>
  );
}*/
