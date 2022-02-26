import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import CloseButton from "../ButtonClose";

type Info = {
  name: string;
  biography: string;
  photo: string;
};

type Props = {
  data: Info;
  hideModal: () => void;
};

export default function CharacterInfoModal({ data, hideModal }: Props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <CloseButton onPress={() => hideModal()} />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.modalText}>{data.biography}</Text>
        <Image source={{ uri: data.photo }} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#20232A",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  img: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 24,
    fontFamily: "benguiat",
    color: "white",
    textAlign: "center",
  },
});
