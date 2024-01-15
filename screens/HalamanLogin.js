import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HalamanLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanlogin}>
      <Image
        style={styles.logoUiuxBangunan1}
        contentFit="cover"
        source={require("../assets/logo-uiux-bangunan-1.png")}
      />
      <Text style={[styles.nizomBuildingShop, styles.getStartTypo]}>
        NIZOM BUILDING SHOP
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </Pressable>
      <Text style={[styles.getStart, styles.getStartTypo]}>get start</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStartTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  logoUiuxBangunan1: {
    top: 113,
    left: 87,
    borderRadius: Border.br_89xl,
    width: 216,
    height: 252,
    position: "absolute",
  },
  nizomBuildingShop: {
    top: 392,
    left: 23,
    width: 343,
    height: 22,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 86,
    top: 600,
    width: 220,
    height: 54,
    position: "absolute",
  },
  getStart: {
    marginLeft: -57,
    top: 616,
    left: "50%",
  },
  halamanlogin: {
    backgroundColor: Color.colorPeachpuff,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default HalamanLogin;
