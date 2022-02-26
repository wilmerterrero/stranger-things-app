import { View, Image, StyleSheet, Platform } from "react-native";
import TextAnimator from "../components/TextAnimator";
const data = require("../data.json");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.about.wallpaper }} style={styles.wallpaper} />
      <TextAnimator
        content="STRANGERS THINGS"
        textStyle={styles.title}
        style={styles.containerStyle}
        duration={1200}
        onFinish={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  wallpaper: {
    width: 420,
    height: 800,
    marginBottom: Platform.OS === 'ios' ? 50 : 100,
  },
  containerStyle: { 
    position: "absolute", 
    bottom: Platform.OS === 'ios' ? 50 : 45 
  },
  title: {
    fontSize: 35,
    fontFamily: "benguiat",
    color: "#FD0126",
  },
});
