import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjang}>
      <Image
        style={styles.keranjangChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.keranjangChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.keranjangInner}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/25694-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.keranjangChild1, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.keranjangChild2, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.pngwing5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/pngwing-8.png")}
      />
      <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Keranjang3")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={[styles.voucherSaya, styles.akunTypo]}>voucher saya</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.keranjangChildShadowBox2]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Image
        style={[styles.download62, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download-6-2.png")}
      />
      <Text style={[styles.gratisOngkir, styles.diskonLayout]}>
        Gratis Ongkir
      </Text>
      <Pressable
        style={[styles.keranjangChild3, styles.keranjangChildShadowBox1]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Text style={[styles.pakai, styles.pakaiTypo]}>pakai</Text>
      <Text style={[styles.minBljRp100000, styles.minLayout]}>
        Min. Blj Rp100.000
      </Text>
      <Text style={[styles.minBljRp100000, styles.minLayout]}>
        Min. Blj Rp100.000
      </Text>
      <Text
        style={[styles.hingga01022024, styles.hinggaLayout]}
      >{`Hingga 01.02.2024 `}</Text>
      <Text style={[styles.sk, styles.skLayout]}>{`S&K`}</Text>
      <Pressable
        style={[styles.keranjangChild4, styles.keranjangChildShadowBox2]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Image
        style={[styles.download63, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download-6-2.png")}
      />
      <Text style={[styles.gratisOngkir1, styles.diskonLayout]}>
        Gratis Ongkir
      </Text>
      <Pressable
        style={[styles.keranjangChild5, styles.keranjangChildShadowBox1]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Text style={[styles.pakai1, styles.pakaiTypo]}>pakai</Text>
      <Text style={[styles.minBljRp1000002, styles.minLayout]}>
        Min. Blj Rp100.000
      </Text>
      <Text style={[styles.minBljRp1000002, styles.minLayout]}>
        Min. Blj Rp100.000
      </Text>
      <Text
        style={[styles.hingga31012024, styles.sk1Typo]}
      >{`Hingga 31.01.2024 `}</Text>
      <Text style={[styles.sk1, styles.sk1Typo]}>{`S&K`}</Text>
      <Pressable
        style={[styles.keranjangChild6, styles.keranjangChildShadowBox2]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <View style={styles.keranjangChildShadowBox} />
      <Text style={[styles.pakai2, styles.pakaiTypo]}>pakai</Text>
      <Text style={[styles.minBljRp200000, styles.diskonPosition]}>
        Min. Blj Rp200.000
      </Text>
      <Text
        style={[styles.hingga010220241, styles.sk2Typo]}
      >{`Hingga 01.02.2024 `}</Text>
      <Text style={[styles.sk2, styles.sk2Typo]}>{`S&K`}</Text>
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/726476-1.png")}
      />
      <Text style={[styles.diskon20, styles.diskonPosition]}>Diskon 20%</Text>
      <Pressable
        style={styles.keranjangChildShadowBox}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Text style={[styles.pakai2, styles.pakaiTypo]}>pakai</Text>
      <Text style={[styles.minBljRp200000, styles.diskonPosition]}>
        Min. Blj Rp200.000
      </Text>
      <Text
        style={[styles.hingga010220241, styles.sk2Typo]}
      >{`Hingga 01.02.2024 `}</Text>
      <Text style={[styles.sk2, styles.sk2Typo]}>{`S&K`}</Text>
      <Image
        style={[styles.icon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/726476-1.png")}
      />
      <Text style={[styles.diskon20, styles.diskonPosition]}>Diskon 20%</Text>
      <Pressable
        style={[styles.keranjangChild9, styles.keranjangChildShadowBox2]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Pressable
        style={[styles.keranjangChild10, styles.keranjangChildShadowBox1]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Text style={[styles.pakai4, styles.pakaiTypo]}>pakai</Text>
      <Text style={[styles.minBljRp250000, styles.diskonPosition]}>
        Min. Blj Rp250.000
      </Text>
      <Text
        style={[styles.hingga010220243, styles.sk4Typo]}
      >{`Hingga 01.02.2024 `}</Text>
      <Text style={[styles.sk4, styles.sk4Typo]}>{`S&K`}</Text>
      <Image
        style={[styles.icon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/726476-1.png")}
      />
      <Text style={[styles.diskon25, styles.diskonPosition]}>Diskon 25%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 732,
    position: "absolute",
  },
  keranjangChildLayout: {
    height: 85,
    width: 100,
    position: "absolute",
  },
  akunTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  homeTypo: {
    top: 809,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  keranjangChildShadowBox2: {
    height: 92,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 405,
    borderWidth: 1,
    left: 0,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  iconLayout: {
    height: 80,
    width: 80,
    left: 13,
    position: "absolute",
  },
  diskonLayout: {
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  keranjangChildShadowBox1: {
    height: 25,
    width: 53,
    borderColor: Color.colorRed,
    left: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  pakaiTypo: {
    width: 33,
    color: Color.colorRed,
    left: 340,
    height: 12,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  minLayout: {
    height: 8,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_5xs,
  },
  hinggaLayout: {
    width: 82,
    color: Color.colorGray_200,
    left: 110,
  },
  skLayout: {
    width: 19,
    color: Color.colorDodgerblue,
    left: 197,
  },
  sk1Typo: {
    top: 270,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  diskonPosition: {
    left: 107,
    width: 158,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  sk2Typo: {
    top: 372,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  sk4Typo: {
    top: 474,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChild: {
    bottom: 1120,
    left: -96,
    width: 582,
    height: 1774,
    position: "absolute",
  },
  keranjangInner: {
    left: 6,
    height: 100,
    width: 100,
    top: 721,
    position: "absolute",
  },
  icon: {
    left: 18,
    borderRadius: Border.br_90xl_5,
    width: 76,
    height: 75,
  },
  ellipseIcon: {
    top: 714,
    left: 139,
  },
  keranjangChild1: {
    left: 272,
    top: 721,
    height: 85,
  },
  keranjangChild2: {
    top: 1785,
    left: 145,
    display: "none",
  },
  pngwing5Icon: {
    left: 285,
    width: 73,
    height: 74,
  },
  akun: {
    top: 812,
    left: 307,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
  },
  home: {
    left: 38,
  },
  transaksi: {
    left: 161,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 38,
    width: 22,
    height: 16,
    left: 13,
    position: "absolute",
  },
  rectangleView: {
    top: 59,
    backgroundColor: Color.colorAntiquewhite_100,
    height: 790,
    width: 405,
    borderWidth: 1,
    left: 0,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  voucherSaya: {
    top: 40,
    left: 74,
    fontSize: FontSize.size_lg,
    width: 258,
    height: 11,
  },
  rectanglePressable: {
    top: 96,
  },
  download62: {
    top: 102,
    borderRadius: Border.br_62xl,
    width: 80,
  },
  gratisOngkir: {
    top: 112,
    width: 158,
    textAlign: "left",
    left: 110,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChild3: {
    top: 129,
  },
  pakai: {
    top: 136,
  },
  minBljRp100000: {
    top: 127,
    width: 158,
    textAlign: "left",
    left: 110,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  hingga01022024: {
    top: 167,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  sk: {
    top: 167,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChild4: {
    top: 199,
  },
  download63: {
    top: 205,
    borderRadius: Border.br_62xl,
    width: 80,
  },
  gratisOngkir1: {
    top: 215,
    width: 158,
    textAlign: "left",
    left: 110,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChild5: {
    top: 232,
  },
  pakai1: {
    top: 239,
  },
  minBljRp1000002: {
    top: 230,
    width: 158,
    textAlign: "left",
    left: 110,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  hingga31012024: {
    width: 82,
    color: Color.colorGray_200,
    left: 110,
  },
  sk1: {
    width: 19,
    color: Color.colorDodgerblue,
    left: 197,
  },
  keranjangChild6: {
    top: 301,
  },
  keranjangChildShadowBox: {
    top: 334,
    height: 25,
    width: 53,
    borderColor: Color.colorRed,
    left: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  pakai2: {
    top: 341,
  },
  minBljRp200000: {
    top: 338,
    height: 8,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_5xs,
  },
  hingga010220241: {
    width: 82,
    color: Color.colorGray_200,
    left: 110,
  },
  sk2: {
    width: 19,
    color: Color.colorDodgerblue,
    left: 197,
  },
  icon2: {
    top: 307,
  },
  diskon20: {
    top: 322,
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  keranjangChild9: {
    top: 403,
  },
  keranjangChild10: {
    top: 436,
  },
  pakai4: {
    top: 443,
  },
  minBljRp250000: {
    top: 440,
    height: 8,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_5xs,
  },
  hingga010220243: {
    width: 82,
    color: Color.colorGray_200,
    left: 110,
  },
  sk4: {
    width: 19,
    color: Color.colorDodgerblue,
    left: 197,
  },
  icon4: {
    top: 409,
  },
  diskon25: {
    top: 424,
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  keranjang: {
    borderWidth: 2,
    flex: 1,
    height: 853,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default Keranjang;
