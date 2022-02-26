import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import MomentsCard from "../components/Moments/MomentsCard";

import { Title } from "../components/Title";
import { RootTabScreenProps } from "../types";

const data = require("../data.json");

export default function MomentsScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <SafeAreaView style={styles.container}>
      <Title title="Best Moments" />
      <FlatList
        data={data.bestMoments}
        renderItem={({ item }) => <MomentsCard {...item} />}
        keyExtractor={(item) => item.title}
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
  },
  title: {
    fontSize: 30,
    fontFamily: "benguiat",
    color: "white",
  },
});
