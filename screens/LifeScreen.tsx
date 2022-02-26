import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Modal } from "react-native";
import { Title } from "../components/Title";

export default function LifeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Title title="Life" />
      <View style={styles.section}>
        <Text style={[styles.text, styles.title]}>
          ¿Por qué esta serie es importante en mi vida?
        </Text>
        <Text style={styles.text}>
          La serie es sumamente buena, en cada uno de sus puntos. Pocos clichés
          y escenas aburridas, verdaderamente pocos; gran evolución y desarrollo
          de los personajes importantes; una trama envolvente y un antagonista
          imponente. Por esas cosas y más, es que Stranger Things tiene tanto
          éxito, éxito más que merecido. Estoy muy emocionado en lo personal por
          la tercera temporada, ¿y tú?. Dicha temporada llegará probablemente
          entre finales de este año y mediados de otro, y la verdad promete
          mucho. ¿Tú que opinas de la serie? ¿Ya viste ambas temporadas?
        </Text>
      </View>
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
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
