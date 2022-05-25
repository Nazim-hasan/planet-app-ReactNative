import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { Spacing } from "../Theme/Spacing";
import { Colors } from "../Theme/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn, title = "THE PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: Spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: Spacing[5],
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
