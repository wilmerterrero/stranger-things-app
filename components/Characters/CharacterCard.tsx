import { useState } from "react";
import {
  Image,
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import CharacterInfoModal from "./CharacterInfoModal";

type Props = {
  name: string;
  photo: string;
};

const data = require("../../data.json");

export default function CharacterCard({ name, photo }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.card}>
          <Image source={{ uri: photo }} style={styles.img} />
          <View>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <CharacterInfoModal
          data={data.characters.find((character: any) => character.name === name)}
          hideModal={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 8,
  },
  card: {
    width: 250,
    height: 370,
    backgroundColor: "black",
    borderWidth: 3,
    borderColor: "white",
  },
  img: {
    width: 245,
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontFamily: "benguiat",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
});
