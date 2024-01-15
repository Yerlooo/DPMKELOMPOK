import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TampilanDalamKategori = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tampilanDalamKategori}>
      <Image
        style={styles.tampilanDalamKategoriChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.tampilanDalamKategoriChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.tampilanDalamKategoriInner}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-80.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.pngtreeSearchIconImage1344}
        contentFit="cover"
        source={require("../assets/pngtreesearchiconimage-1344447-2.png")}
      />
      <Text style={styles.filter}>filter</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.tampilanChildShadowBox]}
        onPress={() => navigation.navigate("Keranjang2")}
      />
      <Image
        style={[styles.download111, styles.duty2IconPosition]}
        contentFit="cover"
        source={require("../assets/download-11-1.png")}
      />
      <Text style={[styles.bakMandiBulat, styles.bakTypo]}>
        bak mandi bulat berbahan keramik kapasitas 116, 5 lt
      </Text>
      <Text style={[styles.berlakuSd31, styles.berlakuTypo]}>{`berlaku s/d
31 des 2024`}</Text>
      <Text style={[styles.rp3000000unit, styles.berlakuTypo]}>
        Rp 3.000.000/Unit
      </Text>
      <Image
        style={[styles.download111, styles.duty2IconPosition]}
        contentFit="cover"
        source={require("../assets/download-11-1.png")}
      />
      <Text style={[styles.bakMandiBulat, styles.bakTypo]}>
        bak mandi bulat berbahan keramik kapasitas 116, 5 lt
      </Text>
      <Text style={[styles.berlakuSd31, styles.berlakuTypo]}>{`berlaku s/d
31 des 2024`}</Text>
      <View
        style={[
          styles.tampilanDalamKategoriChild1,
          styles.tampilanChildShadowBox,
        ]}
      />
      <Text style={[styles.bakMandiMerk, styles.bakTypo]}>
        bak mandi merk Alco kapasitas 140 lt
      </Text>
      <Text style={[styles.berlakuSd312, styles.berlakuTypo]}>{`berlaku s/d
31 des 2024`}</Text>
      <Text style={[styles.rp2850000unit, styles.berlakuTypo]}>
        Rp 2.850.000/Unit
      </Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/2-615081.png")}
      />
      <View
        style={[
          styles.tampilanDalamKategoriChild2,
          styles.tampilanChildShadowBox,
        ]}
      />
      <Text style={[styles.toiletJongkokMerk, styles.bakTypo]}>
        toilet jongkok merk american standard
      </Text>
      <Text style={[styles.berlakuSd313, styles.berlakuTypo]}>{`berlaku s/d
31 des 2024`}</Text>
      <Text style={[styles.rp523000unit, styles.berlakuTypo]}>
        Rp 523.000/Unit
      </Text>
      <View
        style={[
          styles.tampilanDalamKategoriChild3,
          styles.tampilanChildShadowBox,
        ]}
      />
      <Text style={[styles.toiletDudukMerk, styles.bakTypo]}>
        toilet duduk merk american standard
      </Text>
      <Text style={[styles.berlakuSd314, styles.berlakuTypo]}>{`berlaku s/d
31 des 2024`}</Text>
      <Text style={[styles.rp3183000unit, styles.berlakuTypo]}>
        Rp 3.183.000/Unit
      </Text>
      <Image
        style={[styles.duty2Icon, styles.duty2IconPosition]}
        contentFit="cover"
        source={require("../assets/duty-2.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1002000320-2.png")}
      />
      <Image
        style={styles.gambarWhatsapp20240102Puk}
        contentFit="cover"
        source={require("../assets/gambar-whatsapp-20240102-pukul-0148-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tampilanChildShadowBox: {
    height: 92,
    width: 405,
    left: -15,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  duty2IconPosition: {
    left: 10,
    position: "absolute",
  },
  bakTypo: {
    height: 28,
    width: 158,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 99,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  berlakuTypo: {
    color: Color.colorRed,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  iconPosition: {
    width: 78,
    left: 10,
    position: "absolute",
  },
  tampilanDalamKategoriChild: {
    bottom: 1120,
    left: -96,
    width: 582,
    height: 1774,
    position: "absolute",
  },
  tampilanDalamKategoriInner: {
    top: 1785,
    left: 145,
    width: 100,
    height: 85,
    display: "none",
    position: "absolute",
  },
  rectangleIcon: {
    top: 58,
    width: 22,
    height: 16,
    left: 13,
    position: "absolute",
  },
  rectangleView: {
    top: 44,
    left: 42,
    borderRadius: Border.br_mini,
    width: 323,
    height: 41,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  pngtreeSearchIconImage1344: {
    top: 55,
    borderRadius: Border.br_46xl_5,
    width: 19,
    height: 19,
    left: 333,
    position: "absolute",
  },
  filter: {
    top: 111,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 13,
    position: "absolute",
  },
  rectanglePressable: {
    top: 141,
  },
  download111: {
    width: 82,
    height: 74,
    top: 150,
  },
  bakMandiBulat: {
    top: 150,
  },
  berlakuSd31: {
    top: 179,
    fontSize: FontSize.size_5xs,
    color: Color.colorRed,
    left: 333,
  },
  rp3000000unit: {
    top: 190,
    fontSize: FontSize.size_xs,
    left: 99,
    color: Color.colorRed,
  },
  tampilanDalamKategoriChild1: {
    top: 243,
  },
  bakMandiMerk: {
    top: 252,
  },
  berlakuSd312: {
    top: 281,
    fontSize: FontSize.size_5xs,
    color: Color.colorRed,
    left: 333,
  },
  rp2850000unit: {
    top: 292,
    fontSize: FontSize.size_xs,
    left: 99,
    color: Color.colorRed,
  },
  icon: {
    top: 248,
    height: 81,
  },
  tampilanDalamKategoriChild2: {
    top: 446,
  },
  toiletJongkokMerk: {
    top: 455,
  },
  berlakuSd313: {
    top: 484,
    fontSize: FontSize.size_5xs,
    color: Color.colorRed,
    left: 333,
  },
  rp523000unit: {
    top: 495,
    fontSize: FontSize.size_xs,
    left: 99,
    color: Color.colorRed,
  },
  tampilanDalamKategoriChild3: {
    top: 345,
  },
  toiletDudukMerk: {
    top: 354,
  },
  berlakuSd314: {
    top: 383,
    fontSize: FontSize.size_5xs,
    color: Color.colorRed,
    left: 333,
  },
  rp3183000unit: {
    top: 394,
    fontSize: FontSize.size_xs,
    left: 99,
    color: Color.colorRed,
  },
  duty2Icon: {
    top: 353,
    width: 80,
    height: 77,
  },
  icon1: {
    top: 453,
    height: 78,
  },
  gambarWhatsapp20240102Puk: {
    top: 560,
    left: 0,
    width: 390,
    height: 285,
    position: "absolute",
  },
  tampilanDalamKategori: {
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 845,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default TampilanDalamKategori;
