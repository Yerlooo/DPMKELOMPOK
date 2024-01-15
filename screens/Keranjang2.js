import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keranjang2 = () => {
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
      <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      <Text style={[styles.home, styles.akunTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.akunTypo]}>Transaksi</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Keranjang3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleBorder]} />
      <Text style={[styles.pembelian, styles.pembelianTypo]}>pembelian</Text>
      <Text style={styles.vincitoryKunciInggris}>
        VINCITORY KUNCI INGGRIS Adjustable wrench ukuran 8” inc 10” inc 12” inc
        | SKU 2141 2142 2143
      </Text>
      <Text style={[styles.rp23000, styles.rp23000Typo]}>Rp23.000</Text>
      <Image
        style={styles.chromeVanadiumAdjustableWreIcon}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-11.png")}
      />
      <View style={styles.keranjangChild1} />
      <Text style={[styles.text, styles.textLayout]}>1/3</Text>
      <View style={styles.keranjangChild2} />
      <View style={styles.keranjangChild3} />
      <Image
        style={[styles.icon1, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/541415-1.png")}
      />
      <Text style={styles.text1}>4.7/5</Text>
      <Text style={[styles.terjual, styles.terjualTypo]}>487 Terjual</Text>
      <Text style={[styles.hrPengembalian, styles.inch2143Typo]}>
        7 Hr pengembalian
      </Text>
      <Text style={[styles.ori, styles.oriPosition]}>100%ori</Text>
      <Text style={[styles.gunakanVoucher, styles.oriPosition]}>
        gunakan voucher
      </Text>
      <Image
        style={[styles.heartIconLoveSymbolVector, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/hearticonlovesymbolvector260nw1153683760-1.png")}
      />
      <View style={styles.keranjangChild4} />
      <Image
        style={styles.chromeVanadiumAdjustableWreIcon1}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-2.png")}
      />
      <Text style={[styles.rp230001, styles.rp23000Typo]}>Rp23.000</Text>
      <Text style={[styles.stok99814, styles.terjualTypo]}>Stok: 99814</Text>
      <View style={styles.keranjangChild5} />
      <View style={[styles.keranjangChild6, styles.keranjangChildLayout2]} />
      <View style={[styles.keranjangChild7, styles.keranjangChildLayout2]} />
      <Text style={[styles.ukuran, styles.ukuranTypo]}>Ukuran</Text>
      <Text style={[styles.jumlah, styles.ukuranTypo]}>Jumlah</Text>
      <View style={[styles.keranjangChild8, styles.keranjangChildLayout1]} />
      <Image
        style={[
          styles.chromeVanadiumAdjustableWreIcon2,
          styles.chromeIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-3.png")}
      />
      <Text style={[styles.inch2141, styles.inchTypo]}>8 inch (2141)</Text>
      <View style={[styles.keranjangChild9, styles.keranjangChildLayout1]} />
      <Image
        style={[
          styles.chromeVanadiumAdjustableWreIcon3,
          styles.chromeIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-3.png")}
      />
      <Text style={[styles.inch2143, styles.inch2143Typo]}>12 inch (2143)</Text>
      <View style={[styles.keranjangChild10, styles.keranjangChildLayout1]} />
      <Image
        style={[
          styles.chromeVanadiumAdjustableWreIcon4,
          styles.chromeIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-3.png")}
      />
      <Text style={[styles.inch2142, styles.inchTypo]}>10 inch (2142)</Text>
      <View style={styles.keranjangChild11} />
      <View style={[styles.keranjangChild12, styles.keranjangChildLayout]} />
      <View style={[styles.keranjangChild13, styles.keranjangChildLayout]} />
      <Text style={styles.text2}>1</Text>
      <Text style={[styles.text3, styles.textTypo]}>+</Text>
      <Text style={[styles.text4, styles.textTypo]}>-</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleBorder]}
        onPress={() => navigation.navigate("Keranjang1")}
      />
      <Text style={[styles.beliSekarang, styles.pembelianTypo]}>
        Beli Sekarang
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  akunTypo: {
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
  rectangleBorder: {
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  pembelianTypo: {
    height: 11,
    width: 258,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  rp23000Typo: {
    height: 13,
    width: 89,
    color: Color.colorRed,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  textLayout: {
    width: 18,
    position: "absolute",
  },
  terjualTypo: {
    width: 63,
    fontSize: FontSize.size_3xs,
    height: 13,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  inch2143Typo: {
    height: 7,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  oriPosition: {
    left: "50%",
    height: 7,
    fontSize: FontSize.size_6xs,
    top: 486,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChildLayout2: {
    height: 28,
    width: 389,
    borderColor: Color.colorSilver,
    left: 1,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  ukuranTypo: {
    width: 43,
    fontSize: FontSize.size_3xs,
    left: 12,
    height: 11,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChildLayout1: {
    width: 85,
    backgroundColor: Color.colorGainsboro_100,
    height: 29,
    position: "absolute",
  },
  chromeIconLayout: {
    height: 23,
    width: 26,
    position: "absolute",
  },
  inchTypo: {
    top: 677,
    height: 7,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  keranjangChildLayout: {
    width: 12,
    height: 14,
    top: 744,
    borderColor: Color.colorSilver,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  textTypo: {
    top: 746,
    width: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
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
  },
  home: {
    left: 38,
    top: 809,
  },
  transaksi: {
    left: 161,
    top: 809,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 13,
    top: 22,
    width: 22,
  },
  rectangleView: {
    top: 59,
    left: -14,
    backgroundColor: Color.colorAntiquewhite_100,
    width: 405,
    height: 790,
  },
  pembelian: {
    top: 24,
    left: 74,
    color: Color.colorBlack,
  },
  vincitoryKunciInggris: {
    top: 387,
    textAlign: "left",
    width: 385,
    height: 30,
    left: 12,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rp23000: {
    top: 364,
    left: 6,
  },
  chromeVanadiumAdjustableWreIcon: {
    top: 60,
    height: 292,
    width: 390,
    left: 0,
    position: "absolute",
  },
  keranjangChild1: {
    top: 327,
    borderColor: Color.colorDarkgray_100,
    height: 17,
    width: 26,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
    left: 348,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  text: {
    top: 330,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_3xs,
    width: 18,
    left: 352,
    height: 11,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
  },
  keranjangChild2: {
    top: 427,
    height: 37,
    left: 1,
    width: 390,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild3: {
    top: 475,
    height: 29,
    left: 1,
    width: 390,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  icon1: {
    top: 437,
    height: 18,
    left: 12,
  },
  text1: {
    left: 30,
    width: 36,
    top: 441,
    fontSize: FontSize.size_3xs,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  terjual: {
    left: 76,
    top: 441,
    width: 63,
    color: Color.colorBlack,
  },
  hrPengembalian: {
    width: 70,
    top: 486,
    fontSize: FontSize.size_6xs,
    left: 12,
  },
  ori: {
    marginLeft: -16,
    width: 33,
  },
  gunakanVoucher: {
    marginLeft: 117,
    width: 64,
  },
  heartIconLoveSymbolVector: {
    top: 438,
    left: 359,
    borderRadius: Border.br_5xl,
    width: 16,
  },
  keranjangChild4: {
    top: 492,
    width: 391,
    height: 331,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
    left: 0,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  chromeVanadiumAdjustableWreIcon1: {
    top: 508,
    width: 140,
    height: 121,
    left: 12,
    position: "absolute",
  },
  rp230001: {
    top: 577,
    left: 155,
  },
  stok99814: {
    top: 600,
    color: Color.colorDimgray_100,
    left: 161,
  },
  keranjangChild5: {
    top: 640,
    height: 205,
    borderColor: Color.colorSilver,
    left: 1,
    backgroundColor: Color.colorWhite,
    width: 390,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  keranjangChild6: {
    top: 737,
  },
  keranjangChild7: {
    top: 764,
  },
  ukuran: {
    top: 650,
  },
  jumlah: {
    top: 743,
  },
  keranjangChild8: {
    left: 9,
    width: 85,
    backgroundColor: Color.colorGainsboro_100,
    top: 666,
  },
  chromeVanadiumAdjustableWreIcon2: {
    top: 669,
    height: 23,
    left: 12,
  },
  inch2141: {
    left: 41,
    width: 46,
  },
  keranjangChild9: {
    top: 703,
    left: 9,
    width: 85,
    backgroundColor: Color.colorGainsboro_100,
  },
  chromeVanadiumAdjustableWreIcon3: {
    top: 706,
    left: 12,
  },
  inch2143: {
    top: 714,
    left: 42,
    width: 49,
  },
  keranjangChild10: {
    left: 107,
    top: 666,
  },
  chromeVanadiumAdjustableWreIcon4: {
    left: 110,
    top: 669,
    height: 23,
  },
  inch2142: {
    left: 139,
    width: 53,
  },
  keranjangChild11: {
    height: 14,
    top: 744,
    borderColor: Color.colorSilver,
    width: 36,
    backgroundColor: Color.colorWhite,
    left: 348,
    borderWidth: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  keranjangChild12: {
    left: 348,
    width: 12,
  },
  keranjangChild13: {
    left: 372,
  },
  text2: {
    top: 747,
    left: 364,
    height: 8,
    width: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  text3: {
    left: 376,
    height: 8,
  },
  text4: {
    height: 9,
    left: 352,
    top: 746,
  },
  rectanglePressable: {
    top: 799,
    backgroundColor: Color.colorRed,
    width: 378,
    height: 39,
    left: 6,
  },
  beliSekarang: {
    left: 67,
    color: Color.colorWhite,
    top: 809,
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

export default Keranjang2;
