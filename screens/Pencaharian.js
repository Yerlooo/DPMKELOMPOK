import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Pencaharian = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pencaharian}>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/8-3.png")}
      />
      <Image
        style={styles.lampuPhilipsLedBulb10WattIcon}
        contentFit="cover"
        source={require("../assets/lampuphilipsledbulb10watt-3.png")}
      />
      <Image
        style={styles.pencaharianChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.pencaharianChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <View style={styles.pencaharianInner} />
      <Image
        style={styles.pngtreeSearchIconImage1344}
        contentFit="cover"
        source={require("../assets/pngtreesearchiconimage-1344447-2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.pipaRucika, styles.pipaRucikaTypo]}>{`pipa rucika
`}</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={[styles.pencaharianChild1, styles.pencaharianChildPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={[styles.pencaharianChild2, styles.pencaharianChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={[styles.pencaharianChild3, styles.pencaharianChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-86.png")}
      />
      <Text style={[styles.pipaRucika, styles.pipaRucikaTypo]}>{`pipa rucika
`}</Text>
      <Text style={[styles.pasirUntukPlester, styles.kuasCatTypo]}>
        pasir untuk plester
      </Text>
      <View style={[styles.pencaharianChild4, styles.rectangleViewLayout]} />
      <Text style={[styles.lampuPhilips, styles.pipaRucikaTypo]}>
        lampu philips
      </Text>
      <View style={[styles.pencaharianChild5, styles.pencaharianChildBorder]} />
      <View style={[styles.pencaharianChild6, styles.pencaharianChildBorder]} />
      <Text style={[styles.kuasCat, styles.kuasCatTypo]}>{`kuas cat `}</Text>
      <Text style={[styles.pencaharianPilihan, styles.muatUlangTypo]}>
        pencaharian pilihan
      </Text>
      <Pressable
        style={styles.lihatLainnya}
        onPress={() => navigation.navigate("Kategori")}
      >
        <Text style={styles.kuasCatTypo}>lihat lainnya</Text>
      </Pressable>
      <Text style={[styles.muatUlang, styles.muatUlangTypo]}>muat ulang</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Beranda1")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <Image
        style={[styles.lampuPhilipsLedBulb10WattIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/lampuphilipsledbulb10watt-31.png")}
      />
      <Image
        style={[styles.icon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/8-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 172,
    left: 206,
  },
  rectangleViewLayout: {
    height: 48,
    width: 405,
    left: -15,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  pipaRucikaTypo: {
    height: 11,
    width: 105,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleIconPosition: {
    height: 157,
    left: 4,
    position: "absolute",
  },
  pencaharianChildPosition1: {
    top: 511,
    width: 190,
  },
  pencaharianChildPosition: {
    left: 197,
    height: 157,
    position: "absolute",
  },
  kuasCatTypo: {
    width: 136,
    height: 11,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
  },
  pencaharianChildBorder: {
    width: 405,
    left: -15,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  muatUlangTypo: {
    top: 320,
    width: 136,
    height: 11,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconPosition: {
    height: 125,
    top: 360,
    position: "absolute",
  },
  icon: {
    top: 520,
    height: 139,
    position: "absolute",
  },
  lampuPhilipsLedBulb10WattIcon: {
    top: 507,
    left: 9,
    width: 180,
    height: 156,
    position: "absolute",
  },
  pencaharianChild: {
    bottom: 1120,
    left: -96,
    width: 582,
    height: 1774,
    position: "absolute",
  },
  pencaharianInner: {
    top: 10,
    left: 42,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 323,
    height: 41,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  pngtreeSearchIconImage1344: {
    top: 21,
    left: 333,
    borderRadius: Border.br_46xl_5,
    width: 19,
    height: 19,
    position: "absolute",
  },
  ellipseIcon: {
    top: 1785,
    left: 145,
    width: 100,
    height: 85,
    display: "none",
    position: "absolute",
  },
  rectangleView: {
    top: 82,
  },
  pipaRucika: {
    top: 99,
    left: -10,
  },
  rectangleIcon: {
    width: 190,
    height: 157,
    left: 4,
    top: 344,
  },
  pencaharianChild1: {
    height: 157,
    left: 4,
    position: "absolute",
    top: 511,
  },
  pencaharianChild2: {
    top: 511,
    width: 190,
  },
  pencaharianChild3: {
    width: 189,
    top: 344,
    left: 197,
  },
  pasirUntukPlester: {
    top: 147,
    left: 0,
    position: "absolute",
  },
  pencaharianChild4: {
    top: 176,
  },
  lampuPhilips: {
    top: 193,
    left: -4,
  },
  pencaharianChild5: {
    top: 270,
    height: 30,
    backgroundColor: Color.colorPeachpuff,
    width: 405,
    left: -15,
  },
  pencaharianChild6: {
    top: 299,
    backgroundColor: "#ffe6d8",
    height: 14,
  },
  kuasCat: {
    top: 241,
    left: -30,
    position: "absolute",
  },
  pencaharianPilihan: {
    left: 0,
  },
  lihatLainnya: {
    left: 127,
    top: 281,
    position: "absolute",
  },
  muatUlang: {
    left: 270,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 13,
    top: 22,
    width: 22,
    height: 16,
    position: "absolute",
  },
  lampuPhilipsLedBulb10WattIcon1: {
    left: 8,
    width: 182,
  },
  icon2: {
    width: 172,
    left: 206,
  },
  pencaharian: {
    borderWidth: 2,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default Pencaharian;
