import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import Text from "../Components/Text/Text";
import PlanetHeader from "../Components/PlanetHeader";
import { Colors } from "../Theme/Colors";
import { Spacing } from "../Theme/Spacing";
// import {
//   EarthSvg,
//   JupiterSvg,
//   MarsSvg,
//   MercurySvg,
//   NeptuneSvg,
//   SaturnSvg,
//   UranusSvg,
//   VenusSvg,
// } from "../Svg";
const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="h2" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    revolutionTime,
    rotationTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  // console.log("PLanet =>", planet);

  // const renderImage = (name) => {
  //   switch (name) {
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "venus":
  //       return <VenusSvg />;
  //     case "earth":
  //       return <EarthSvg />;
  //     case "mars":
  //       return <MarsSvg />;
  //     case "jupiter":
  //       return <JupiterSvg />;
  //     case "saturn":
  //       return <SaturnSvg />;
  //     case "uranus":
  //       return <UranusSvg />;
  //     case "neptune":
  //       return <NeptuneSvg />;
  //   }
  // };
  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        {/* <View style={styles.imageView}>{renderImage(name)}</View> */}
        <View style={styles.detailsContainer}>
          <Text preset="h1">{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable style={styles.source} onPress={onPressLink}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
          <View style={{ height: 40 }} />
        </View>

        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  imageView: {
    padding: Spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    marginTop: 20,
    lineHeight: 21,
  },
  source: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[4],
    borderWidth: 1,
    borderColor: Colors.grey,
    marginHorizontal: Spacing[6],
    marginBottom: Spacing[4],
  },
});
