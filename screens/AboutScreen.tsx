import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import CharacterInfoModal from "../components/Characters/CharacterInfoModal";
import { Title } from "../components/Title";
import Colors from "../constants/Colors";

const data = require("../data.json");

export default function AboutScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Title title="About" />
      <View style={[styles.section, styles.rowSection]}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.title]}>Episodios</Text>
          <Text style={styles.text}>{data.about.totalEpisodes}</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, styles.title]}>Temporadas</Text>
          <Text style={styles.text}>{data.about.totalSeasons}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.title]}>Descripción</Text>
        <Text style={styles.text}>{data.about.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.btnAuthor}>
          <Text style={styles.text}>Ver Autores</Text>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <CharacterInfoModal
          data={data.about.authors}
          hideModal={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  rowSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnAuthor: {
    padding: 20,
    width: 200,
    backgroundColor: Colors.dark.tint,
    borderRadius: 50,
  },
});
