import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import CloseButton from "../ButtonClose";

type Info = {
  title: string;
  metadata: string;
  description: string;
  video: string;
};

type Props = {
  data: Info;
  hideModal: () => void;
};

export default function MomentInfoModal({ data, hideModal }: Props) {
  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.modalView}>
        <CloseButton onPress={() => hideModal()} />
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.modalText}>{data.metadata}</Text>
        <WebView
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: data.video,
          }}
        />
        <Text style={styles.modalText}>{data.description}</Text>
      </View>
    </SafeAreaView>
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
  video: {
    width: 300,
    height: 300,
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },
  text: {
    fontSize: 24,
    fontFamily: "benguiat",
    color: "white",
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
});
