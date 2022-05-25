import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./src/Theme/Colors";
import { Spacing } from "./src/Theme/Spacing";
import { useFonts } from "expo-font";
import { Typography } from "./src/Theme/Typography";

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/Fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/Fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/Fonts/Spartan-Regular.ttf"),
  });
  if (!loaded) {
    <Text>Font is Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Typography.bold, fontSize: Spacing[5] }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ marginTop: Spacing[5] }}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
  },
});
