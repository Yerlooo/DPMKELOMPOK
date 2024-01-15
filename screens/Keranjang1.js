import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Keranjang1 = () => {
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Keranjang2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View style={[styles.keranjangChild1, styles.keranjangChildPosition]} />
      <Pressable
        style={[styles.rectanglePressable, styles.keranjangChildPosition]}
        onPress={() => navigation.navigate("Keranjang")}
      />
      <View style={[styles.keranjangChild2, styles.keranjangChildPosition]} />
      <View style={[styles.keranjangChild3, styles.keranjangChildPosition]} />
      <View style={[styles.keranjangChild4, styles.lineIconLayout]} />
      <View style={[styles.keranjangChild5, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.pngTransparentGoogleMapMakIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pngtransparentgooglemapmakerpincomputericonsgooglemapsmapiconangleblackmap-1.png")}
      />
      <Text
        style={[
          styles.alamatPengirimanMuhammad,
          styles.vincitoryKunciInggrisTypo,
        ]}
      >{`Alamat Pengiriman

muhammad efendi | 082385416069
jl. handayani Kelurahan, sidomulyo timur. kecamatan Marpoyan Damai, Kota Pekanbaru, Riau 28125
MARPOYAN DAMAI, KOTA PEKANBARU, RIAU, ID 28125`}</Text>
      <Image
        style={[
          styles.gambarWhatsapp20240103Puk,
          styles.keranjangChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/gambar-whatsapp-20240103-pukul-2114-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-30.png")}
      />
      <Image
        style={styles.keranjangChild6}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.keranjangChild7, styles.keranjangChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-32.png")}
      />
      <Image
        style={[styles.keranjangChild8, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/line-33.png")}
      />
      <Image
        style={[styles.keranjangChild9, styles.keranjangChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-32.png")}
      />
      <Image
        style={[styles.keranjangChild10, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/line-33.png")}
      />
      <Image
        style={[styles.chromeVanadiumAdjustableWreIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/chrome-vanadium-adjustable-wrench-1.png")}
      />
      <Text style={[styles.vincitoryKunciInggris, styles.rp23000Position]}>
        VINCITORY KUNCI INGGRIS Adjustable wrench ukuran 8” inc 10” inc 12” inc
        | SKU 2141 2142 2143
      </Text>
      <Text style={[styles.rp23000, styles.rp23000Position]}>Rp23.000</Text>
      <Text style={[styles.voucherSaya, styles.voucherSayaTypo]}>
        Voucher saya
      </Text>
      <Text style={[styles.metodePembayaran, styles.voucherSayaTypo]}>
        Metode Pembayaran
      </Text>
      <Text style={styles.rincianPembayaran}>Rincian Pembayaran</Text>
      <Text style={[styles.totalPembayaran, styles.buatPesananLayout]}>
        Total Pembayaran
      </Text>
      <Text style={styles.subtotalUntukProdukContainer}>
        {`Subtotal untuk produk

Subtotal Pengiriman

Total Diskon Pengiriman
`}
        {`Biaya Penanganan `} Biaya Layanan
      </Text>
      <Text style={styles.rp23000Rp35000Rp35000Container}>
        {`Rp23.000

Rp35.000

-Rp35.000
`}
        Rp1.000 Rp1.000
      </Text>
      <Text style={[styles.rp25000, styles.rp25000Clr]}>Rp25.000</Text>
      <Text style={[styles.transferBank, styles.voucherSayaTypo]}>
        Transfer Bank - Bank BSI
      </Text>
      <Text style={[styles.voucherGratisOngkir, styles.keranjangChildLayout1]}>
        Voucher Gratis Ongkir
      </Text>
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/2615079-21.png")}
      />
      <Image
        style={[styles.download72, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/download-7-2.png")}
      />
      <View style={[styles.keranjangChild11, styles.keranjangChildBorder]} />
      <Pressable
        style={[styles.keranjangChild12, styles.keranjangChildBorder]}
        onPress={() => navigation.navigate("Pengiriman")}
      />
      <Text style={[styles.buatPesanan, styles.rp250001Typo]}>
        Buat Pesanan
      </Text>
      <Text style={[styles.totalPembayaran1, styles.rp250001Typo]}>
        Total Pembayaran
      </Text>
      <Text style={[styles.rp250001, styles.rp250001Typo]}>Rp25.000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
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
    borderStyle: "solid",
  },
  keranjangChildPosition: {
    left: 1,
    width: 390,
    position: "absolute",
  },
  lineIconLayout: {
    height: 12,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  vincitoryKunciInggrisTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  keranjangChildLayout1: {
    height: 5,
    position: "absolute",
  },
  keranjangChildLayout: {
    height: 6,
    width: 7,
    left: 378,
    position: "absolute",
  },
  iconPosition: {
    left: 12,
    position: "absolute",
  },
  rp23000Position: {
    left: 139,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  voucherSayaTypo: {
    height: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  buatPesananLayout: {
    width: 147,
    textAlign: "center",
  },
  rp25000Clr: {
    color: Color.colorRed,
    textAlign: "right",
    height: 12,
  },
  keranjangChildBorder: {
    height: 72,
    top: 775,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  rp250001Typo: {
    fontSize: FontSize.size_lg,
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
  icon: {
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
  rectangleView: {
    top: 59,
    left: -14,
    backgroundColor: Color.colorAntiquewhite_100,
    width: 405,
    height: 790,
    borderColor: Color.colorBlack,
  },
  keranjangChild1: {
    top: 176,
    height: 120,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    backgroundColor: Color.colorPeachpuff,
  },
  rectanglePressable: {
    top: 302,
    height: 28,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild2: {
    top: 336,
    height: 48,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild3: {
    top: 449,
    height: 238,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 1,
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild4: {
    top: 310,
    backgroundColor: Color.colorWhite,
    borderColor: "#9f8a80",
    width: 61,
    left: 308,
    height: 12,
    borderWidth: 1,
    borderStyle: "solid",
  },
  keranjangChild5: {
    top: 69,
    left: 0,
    borderColor: Color.colorPeachpuff,
    width: 391,
    height: 97,
    backgroundColor: Color.colorPeachpuff,
  },
  pngTransparentGoogleMapMakIcon: {
    top: 80,
    left: 11,
    borderRadius: 58,
    position: "absolute",
  },
  alamatPengirimanMuhammad: {
    top: 76,
    left: 47,
    width: 326,
    height: 75,
    fontFamily: FontFamily.aldrich,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  gambarWhatsapp20240103Puk: {
    top: 163,
    height: 3,
    width: 390,
  },
  lineIcon: {
    top: 107,
    left: 369,
    width: 14,
  },
  keranjangChild6: {
    top: 116,
    left: 373,
    width: 11,
    height: 14,
    position: "absolute",
  },
  keranjangChild7: {
    width: 8,
    left: 375,
    height: 5,
    top: 311,
  },
  keranjangChild8: {
    top: 315,
  },
  keranjangChild9: {
    top: 356,
    width: 8,
    left: 375,
    height: 5,
  },
  keranjangChild10: {
    top: 360,
  },
  chromeVanadiumAdjustableWreIcon: {
    width: 120,
    height: 100,
    top: 186,
  },
  vincitoryKunciInggris: {
    width: 245,
    height: 30,
    top: 186,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    left: 139,
  },
  rp23000: {
    top: 232,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkgray_200,
    width: 78,
    height: 13,
    textAlign: "center",
  },
  voucherSaya: {
    width: 70,
    left: 40,
    fontSize: FontSize.size_3xs,
    top: 311,
  },
  metodePembayaran: {
    top: 355,
    width: 105,
    left: 40,
    fontSize: FontSize.size_3xs,
  },
  rincianPembayaran: {
    top: 460,
    left: 108,
    textDecoration: "underline",
    width: 176,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  totalPembayaran: {
    left: 14,
    top: 650,
    width: 147,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  subtotalUntukProdukContainer: {
    height: 109,
    color: Color.colorGray_100,
    top: 501,
    width: 152,
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rp23000Rp35000Rp35000Container: {
    textAlign: "right",
    left: 224,
    height: 109,
    width: 152,
    color: Color.colorGray_100,
    top: 501,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rp25000: {
    left: 224,
    width: 152,
    color: Color.colorRed,
    top: 650,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  transferBank: {
    left: 236,
    width: 133,
    top: 356,
  },
  voucherGratisOngkir: {
    top: 314,
    fontSize: 5,
    width: 60,
    textAlign: "center",
    height: 5,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 308,
  },
  icon1: {
    top: 306,
    height: 20,
    width: 20,
  },
  download72: {
    top: 350,
    borderRadius: 94,
    height: 20,
    width: 20,
  },
  keranjangChild11: {
    left: -1,
    width: 390,
    backgroundColor: Color.colorPeachpuff,
  },
  keranjangChild12: {
    backgroundColor: Color.colorRed,
    width: 195,
    left: 224,
  },
  buatPesanan: {
    top: 800,
    left: 233,
    color: Color.colorWhite,
    height: 11,
    width: 147,
    textAlign: "center",
  },
  totalPembayaran1: {
    top: 789,
    left: 52,
    color: Color.colorDimgray_200,
    width: 168,
    textAlign: "center",
  },
  rp250001: {
    top: 814,
    left: 120,
    width: 99,
    color: Color.colorRed,
    textAlign: "right",
    height: 12,
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

export default Keranjang1;
