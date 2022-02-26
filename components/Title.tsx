import { StyleSheet, View, Text } from "react-native";

type Props = {
  title: string;
}

export function Title({ title } : Props) {
  return (
    <View style={styles.textContainer}>
      <View style={styles.separator} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "benguiat",
    color: "white",
  },
  separator: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },
});
