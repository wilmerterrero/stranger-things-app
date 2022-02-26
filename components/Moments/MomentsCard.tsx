import { useState } from "react";
import {
  Image,
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MomentInfoModal from "./MomentInfoModal";

type Props = {
  title: string;
  metadata: string;
  description: string;
  photo: string;
  video: string;
};

export default function MomentsCard({
  title,
  metadata,
  description,
  photo,
  video,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Image source={{ uri: photo }} style={styles.img} />
            <View>
              <Text style={styles.text}>{title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <MomentInfoModal
          data={{ title, metadata, description, video }}
          hideModal={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  card: {
    width: 360,
    height: 360,
    backgroundColor: "black",
    borderWidth: 3,
    borderColor: "white",
  },
  img: {
    width: 350,
    height: 280,
  },
  text: {
    color: "white",
    marginVertical: 12,
    fontSize: 24,
    fontFamily: "benguiat",
    textAlign: "center",
  },
});
