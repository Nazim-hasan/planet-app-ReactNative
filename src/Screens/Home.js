import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../Components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../Components/PlanetHeader";
import { Colors } from "../Theme/Colors";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
      <PlanetHeader></PlanetHeader>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
