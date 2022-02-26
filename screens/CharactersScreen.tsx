import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterCard from "../components/Characters/CharacterCard";

import { Title } from "../components/Title";
import { RootTabScreenProps } from "../types";

const data = require("../data.json");

export default function CharactersScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <SafeAreaView style={styles.container}>
      <Title title="Characters" />
      <FlatList
        data={data.charactersPhoto}
        horizontal
        renderItem={({ item }) => <CharacterCard {...item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    marginVertical: 50,
  },
  characters: {
    flexDirection: "row",
    padding: 60,
  },
  title: {
    fontSize: 30,
    fontFamily: "benguiat",
    color: "white",
  },
  separator: {
    height: 3,
    width: "45%",
  },
});
