import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./src/Theme/Colors";
import { Spacing } from "./src/Theme/Spacing";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{ marginTop: Spacing[5] }}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
  },
});
