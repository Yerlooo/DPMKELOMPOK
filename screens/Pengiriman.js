import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Pengiriman = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pengiriman}>
      <Text style={[styles.provinsi, styles.alamatTypo1]}>Provinsi</Text>
      <Text style={[styles.kotakabupaten, styles.alamatTypo]}>
        Kota/Kabupaten
      </Text>
      <Text style={[styles.kecamatan, styles.alamatTypo]}>Kecamatan</Text>
      <Text style={[styles.lokasiAlamat, styles.alamatTypo]}>
        Lokasi Alamat
      </Text>
      <View style={styles.pengirimanChild} />
      <Pressable
        style={[styles.pngClipartShoppingCartComp, styles.download1IconLayout]}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pngclipartshoppingcartcomputericonsshoppingcartangleshoppingcentre-1.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.pngtreeSearchIconImage1344,
          styles.pengirimanChild4Layout,
        ]}
        contentFit="cover"
        source={require("../assets/pngtreesearchiconimage-1344447-2.png")}
      />
      <Image
        style={[styles.download1Icon, styles.download1IconLayout]}
        contentFit="cover"
        source={require("../assets/download-2.png")}
      />
      <Image
        style={styles.pengirimanItem}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Pressable
        style={[styles.pressable, styles.pngwing5Position]}
        onPress={() => navigation.navigate("Beranda1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/25694-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.pengirimanInner, styles.pengirimanLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.pengirimanLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.pengirimanChild1, styles.pengirimanLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={[styles.pngwing5, styles.pngwing5Position]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/pngwing-8.png")}
        />
      </Pressable>
      <Text style={[styles.akun, styles.alamatTypo1]}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.pengirimanChild2, styles.pengirimanChildLayout2]} />
      <View style={[styles.pengirimanChild3, styles.pengirimanChildBorder]} />
      <Text style={[styles.riau, styles.riauTypo]}>Riau</Text>
      <Text style={[styles.ubahLokasiAlamat, styles.alamatTypo1]}>
        Ubah Lokasi Alamat
      </Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <Text style={[styles.masukkanAlamat, styles.wrapperPosition]}>
        Masukkan Alamat
      </Text>
      <Image
        style={[styles.pengirimanChild4, styles.pengirimanChild4Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <Image
        style={[styles.lineIcon, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.pengirimanChild5, styles.pengirimanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.pengirimanChild6, styles.pengirimanChildBorder]} />
      <Text style={[styles.riau1, styles.riauTypo]}>Riau</Text>
      <View style={[styles.pengirimanChild7, styles.pengirimanChildBorder]} />
      <Image
        style={[styles.pengirimanChild8, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[styles.pengirimanChild9, styles.pengirimanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.bukitRaya, styles.riauTypo]}>Bukit Raya</Text>
      <Text style={[styles.kelurahan, styles.kodePosTypo]}>Kelurahan</Text>
      <View style={[styles.pengirimanChild10, styles.pengirimanChildBorder]} />
      <Image
        style={[styles.pengirimanChild11, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[styles.pengirimanChild12, styles.pengirimanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.simpangTiga, styles.riauTypo]}>Simpang Tiga</Text>
      <Text style={[styles.kodePos, styles.kodePosTypo]}>Kode Pos</Text>
      <Text style={[styles.deskripsiAlamat, styles.alamatTypo]}>
        Deskripsi Alamat
      </Text>
      <View style={[styles.pengirimanChild13, styles.pengirimanChildBorder]} />
      <View style={[styles.pengirimanChild14, styles.pengirimanChildBorder]} />
      <Pressable
        style={[styles.rectanglePressable, styles.pengirimanChildBorder]}
        onPress={() => navigation.navigate("Beranda")}
      />
      <Image
        style={[styles.pengirimanChild15, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[styles.pengirimanChild16, styles.pengirimanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.text, styles.riauTypo]}>28432</Text>
      <Text style={[styles.simpan, styles.simpanTypo]}>Simpan</Text>
      <Image
        style={[styles.pengirimanChild17, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.pengirimanChild17, styles.pengirimanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.pengirimanChild19, styles.pengirimanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={styles.pngwing4Icon}
        contentFit="cover"
        source={require("../assets/pngwing-9.png")}
      />
      <Text
        style={[styles.muhammadEfendi, styles.simpanTypo]}
      >{`muhammad efendi | 082385416069
jl. handayani Kelurahan, sidomulyo timur. kecamatan Marpoyan Damai, Kota Pekanbaru, Riau 28125
MARPOYAN DAMAI, KOTA PEKANBARU, RIAU, ID 28125`}</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Keranjang1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  alamatTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  alamatTypo: {
    left: 11,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  download1IconLayout: {
    height: 29,
    width: 29,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pengirimanChild4Layout: {
    width: 19,
    position: "absolute",
  },
  pngwing5Position: {
    top: 999,
    position: "absolute",
  },
  pengirimanLayout: {
    height: 85,
    width: 100,
    position: "absolute",
  },
  homeTypo: {
    top: 1076,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  pengirimanChildLayout2: {
    width: 368,
    left: 11,
  },
  pengirimanChildBorder: {
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  riauTypo: {
    left: 20,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wrapperPosition: {
    left: 10,
    position: "absolute",
  },
  pengirimanChildLayout1: {
    height: 6,
    width: 4,
    left: 363,
    position: "absolute",
  },
  pengirimanChildLayout: {
    height: 5,
    left: 359,
    width: 4,
    position: "absolute",
  },
  kodePosTypo: {
    left: 14,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  simpanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  provinsi: {
    top: 403,
    left: 9,
    position: "absolute",
  },
  kotakabupaten: {
    top: 474,
  },
  kecamatan: {
    top: 550,
  },
  lokasiAlamat: {
    top: 144,
  },
  pengirimanChild: {
    top: 44,
    left: 34,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorPeachpuff,
    borderWidth: 5,
    width: 250,
    height: 40,
    position: "absolute",
    borderStyle: "solid",
  },
  icon: {
    borderRadius: Border.br_90xl,
  },
  pngClipartShoppingCartComp: {
    left: 303,
    top: 50,
  },
  pngtreeSearchIconImage1344: {
    top: 55,
    left: 45,
    borderRadius: Border.br_46xl_5,
    height: 19,
  },
  download1Icon: {
    top: 49,
    left: 344,
    borderRadius: Border.br_38xl,
  },
  pengirimanItem: {
    height: 100,
    width: 100,
    top: 988,
    left: 11,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_90xl_5,
  },
  pressable: {
    width: 76,
    height: 75,
    left: 23,
  },
  pengirimanInner: {
    top: 981,
    left: 144,
  },
  ellipseIcon: {
    left: 277,
    top: 988,
    height: 85,
  },
  pengirimanChild1: {
    top: 1785,
    left: 145,
    display: "none",
  },
  pngwing5: {
    left: 290,
    width: 73,
    height: 74,
  },
  akun: {
    top: 1079,
    left: 312,
    position: "absolute",
  },
  home: {
    left: 43,
  },
  transaksi: {
    left: 166,
  },
  rectangleView: {
    top: 89,
    left: -17,
    width: 405,
    height: 39,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  pengirimanChild2: {
    top: 348,
    backgroundColor: "#d0d0d0",
    height: 39,
    position: "absolute",
  },
  pengirimanChild3: {
    top: 419,
    width: 368,
    left: 11,
    height: 39,
    backgroundColor: Color.colorSnow,
  },
  riau: {
    top: 432,
  },
  ubahLokasiAlamat: {
    top: 361,
    left: 146,
    width: 120,
    height: 12,
    position: "absolute",
  },
  rectangleIcon: {
    top: 161,
    left: 0,
    width: 390,
    height: 179,
    position: "absolute",
  },
  masukkanAlamat: {
    top: 104,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  pengirimanChild4: {
    top: 352,
    left: 124,
    height: 21,
  },
  lineIcon: {
    top: 436,
  },
  pengirimanChild5: {
    top: 437,
  },
  pengirimanChild6: {
    top: 490,
    width: 368,
    left: 11,
    height: 39,
    backgroundColor: Color.colorSnow,
  },
  riau1: {
    top: 503,
  },
  pengirimanChild7: {
    top: 565,
    width: 368,
    left: 11,
    height: 39,
    backgroundColor: Color.colorSnow,
  },
  pengirimanChild8: {
    top: 581,
  },
  pengirimanChild9: {
    top: 582,
  },
  bukitRaya: {
    top: 579,
  },
  kelurahan: {
    top: 620,
  },
  pengirimanChild10: {
    top: 635,
    width: 368,
    left: 11,
    height: 39,
    backgroundColor: Color.colorSnow,
  },
  pengirimanChild11: {
    top: 651,
  },
  pengirimanChild12: {
    top: 652,
  },
  simpangTiga: {
    top: 649,
  },
  kodePos: {
    top: 696,
  },
  deskripsiAlamat: {
    top: 779,
  },
  pengirimanChild13: {
    top: 711,
    width: 368,
    left: 11,
    height: 39,
    backgroundColor: Color.colorSnow,
  },
  pengirimanChild14: {
    top: 795,
    height: 76,
    width: 368,
    left: 11,
    backgroundColor: Color.colorSnow,
  },
  rectanglePressable: {
    top: 889,
    left: 107,
    borderRadius: 30,
    backgroundColor: Color.colorRed,
    width: 175,
    height: 38,
  },
  pengirimanChild15: {
    top: 727,
  },
  pengirimanChild16: {
    top: 728,
  },
  text: {
    top: 725,
  },
  simpan: {
    top: 902,
    left: 172,
    color: Color.colorWhite,
  },
  pengirimanChild17: {
    top: 507,
  },
  pengirimanChild19: {
    top: 508,
  },
  pngwing4Icon: {
    top: 995,
    left: 152,
    borderRadius: Border.br_xl,
    width: 85,
    height: 78,
    position: "absolute",
  },
  muhammadEfendi: {
    top: 803,
    width: 326,
    height: 60,
    left: 23,
    color: Color.colorBlack,
    textAlign: "left",
  },
  wrapper: {
    top: 56,
    width: 22,
    height: 16,
  },
  pengiriman: {
    backgroundColor: Color.colorPeachpuff,
    borderWidth: 2,
    flex: 1,
    height: 1112,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
});

export default Pengiriman;
