import { View, StyleSheet, FlatList, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Text from "../Components/Text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../Components/PlanetHeader";
import { Colors } from "../Theme/Colors";
import { PLANET_LIST } from "../Data/PLANET_LIST";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { Spacing } from "../Theme/Spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({ name, color, item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>

      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);
  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();

      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };
  const renderItem = ({ item }) => {
    const { name, color } = item;
    return <PlanetItem name={name} color={color} item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={Colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: Spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  list: {
    padding: Spacing[5],
  },
  separator: {
    borderBottomColor: Colors.white,
    borderWidth: 0.5,
  },
  searchInput: {
    padding: Spacing[4],
    color: Colors.white,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    margin: Spacing[5],
  },
});
