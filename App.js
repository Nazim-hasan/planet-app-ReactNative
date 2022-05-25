import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Colors } from "./src/Theme/Colors";
import { Spacing } from "./src/Theme/Spacing";
import { useFonts } from "expo-font";
import { Typography } from "./src/Theme/Typography";
import Text from "./src/Components/Text/Text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";

const Stack = createNativeStackNavigator();
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
