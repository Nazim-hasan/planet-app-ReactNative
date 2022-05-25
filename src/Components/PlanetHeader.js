import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { Spacing } from "../Theme/Spacing";
import { Colors } from "../Theme/Colors";

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: Spacing[5],
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
  },
});
