import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

type Props = {
  onPress: () => void;
};

export default function CloseButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonClose]}
      onPress={() => onPress()}
    >
      <Text style={styles.textStyle}>
        <FontAwesome size={10} style={{ marginBottom: -3 }} name="close" />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    left: "50%",
    top: -20,
  },
  buttonClose: {
    backgroundColor: Colors.dark.tint,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
