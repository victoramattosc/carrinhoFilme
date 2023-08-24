import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { StatusBar, SafeAreaView } from "react-native";
import Carrinho from "./src/pages/Carrinho/index";

export default function App() {
  const [fonteCarregada] = useFonts({
    DRegular: DMSans_400Regular,
    DItalic: DMSans_400Regular_Italic,
    DBold: DMSans_700Bold,
  });

  if (!fonteCarregada) {
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Carrinho />
    </SafeAreaView>
  );
}
