import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Text from "../Components/Text/Text";
import PlanetHeader from "../Components/PlanetHeader";
import { Colors } from "../Theme/Colors";

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />

      <Text></Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
