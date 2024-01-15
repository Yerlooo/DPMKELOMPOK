import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keranjang3 = () => {
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
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={styles.akun}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <Text style={[styles.pembelian, styles.pembelianTypo]}>pembelian</Text>
      <Text style={styles.vincitoryKunciInggris}>
        VINCITORY KUNCI INGGRIS Adjustable wrench ukuran 8” inc 10” inc 12” inc
        | SKU 2141 2142 2143
      </Text>
      <Text style={styles.rp23000}>Rp23.000</Text>
      <Image
        style={styles.chromeVanadiumAdjustableWreIcon}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-11.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.text, styles.textLayout]}>1/3</Text>
      <View style={[styles.keranjangChild1, styles.keranjangChildBorder]} />
      <View style={[styles.keranjangChild2, styles.keranjangChild2Border]} />
      <Pressable
        style={[styles.rectanglePressable, styles.keranjangChild2Border]}
        onPress={() => navigation.navigate("Keranjang2")}
      />
      <Pressable
        style={[styles.keranjangChild3, styles.keranjangChildBorder]}
        onPress={() => navigation.navigate("Keranjang")}
      />
      <Image
        style={[styles.icon1, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/541415-1.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>4.7/5</Text>
      <Text style={[styles.terjual, styles.text1Typo]}>487 Terjual</Text>
      <Text style={styles.hrPengembalian}>7 Hr pengembalian</Text>
      <Text style={[styles.ori, styles.oriPosition]}>100%ori</Text>
      <Text style={[styles.gunakanVoucher, styles.oriPosition]}>
        gunakan voucher
      </Text>
      <Image
        style={[styles.heartIconLoveSymbolVector, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/hearticonlovesymbolvector260nw1153683760-1.png")}
      />
      <Pressable
        style={styles.pngClipartShoppingCartComp}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pngclipartshoppingcartcomputericonsshoppingcartangleshoppingcentre-2.png")}
        />
      </Pressable>
      <Text style={[styles.beliSekarang, styles.pembelianTypo]}>
        Beli Sekarang
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    top: 809,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wrapperLayout: {
    height: 16,
    position: "absolute",
  },
  pembelianTypo: {
    height: 11,
    width: 258,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  textLayout: {
    width: 18,
    position: "absolute",
  },
  keranjangChildBorder: {
    left: 7,
    borderWidth: 1,
    width: 390,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild2Border: {
    height: 72,
    top: 772,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  text1Typo: {
    top: 492,
    fontSize: FontSize.size_3xs,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  oriPosition: {
    left: "50%",
    height: 7,
    fontSize: FontSize.size_6xs,
    top: 537,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  keranjangChild: {
    bottom: 1120,
    left: -96,
    width: 582,
    height: 1774,
    position: "absolute",
  },
  keranjangInner: {
    top: 1785,
    left: 145,
    width: 100,
    height: 85,
    display: "none",
    position: "absolute",
  },
  akun: {
    top: 812,
    left: 307,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  home: {
    left: 38,
  },
  transaksi: {
    left: 161,
  },
  wrapper: {
    left: 19,
    top: 73,
    width: 22,
  },
  pembelian: {
    top: 75,
    left: 66,
    color: Color.colorBlack,
  },
  vincitoryKunciInggris: {
    top: 438,
    textAlign: "left",
    width: 385,
    height: 30,
    left: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rp23000: {
    top: 415,
    left: 12,
    fontSize: FontSize.size_mini,
    color: Color.colorRed,
    width: 89,
    height: 13,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  chromeVanadiumAdjustableWreIcon: {
    top: 111,
    left: 6,
    height: 292,
    width: 390,
    position: "absolute",
  },
  rectangleView: {
    top: 378,
    left: 354,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorDarkgray_100,
    width: 26,
    height: 17,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  text: {
    top: 381,
    left: 358,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_3xs,
    width: 18,
    height: 11,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
  },
  keranjangChild1: {
    top: 478,
    height: 37,
  },
  keranjangChild2: {
    left: 0,
    width: 390,
    backgroundColor: Color.colorPeachpuff,
    height: 72,
    top: 772,
  },
  rectanglePressable: {
    left: 195,
    backgroundColor: Color.colorRed,
    width: 195,
  },
  keranjangChild3: {
    top: 526,
    height: 29,
  },
  icon1: {
    top: 488,
    height: 18,
    left: 18,
  },
  text1: {
    left: 36,
    width: 36,
  },
  terjual: {
    left: 82,
    width: 63,
  },
  hrPengembalian: {
    width: 70,
    height: 7,
    fontSize: FontSize.size_6xs,
    top: 537,
    left: 18,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  ori: {
    marginLeft: -10,
    width: 33,
  },
  gunakanVoucher: {
    marginLeft: 123,
    width: 64,
  },
  heartIconLoveSymbolVector: {
    top: 489,
    left: 365,
    borderRadius: Border.br_5xl,
    width: 16,
  },
  icon2: {
    borderRadius: Border.br_90xl,
  },
  pngClipartShoppingCartComp: {
    left: 60,
    top: 783,
    width: 50,
    height: 50,
    position: "absolute",
  },
  beliSekarang: {
    top: 797,
    left: 164,
    color: Color.colorWhite,
  },
  keranjang: {
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

export default Keranjang3;
