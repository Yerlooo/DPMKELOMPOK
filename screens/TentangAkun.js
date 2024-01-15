import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TentangAkun = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tentangakun}>
      <Image
        style={styles.tentangakunChild}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={[styles.tentangakunItem, styles.tentangakunChildLayout]} />
      <Text style={[styles.akunSaya, styles.bantuanTypo]}>Akun saya</Text>
      <Text
        style={[styles.akunKeamanan, styles.bantuanTypo]}
      >{`Akun & keamanan`}</Text>
      <View style={[styles.tentangakunInner, styles.tentangakunChildLayout]} />
      <Text style={[styles.alamatSaya, styles.bantuanTypo]}>Alamat Saya</Text>
      <View style={[styles.rectangleView, styles.tentangakunChildLayout]} />
      <Text style={[styles.rekeningBank, styles.bantuanTypo]}>
        Rekening bank
      </Text>
      <View style={[styles.tentangakunChild1, styles.tentangakunChildLayout]} />
      <Text style={[styles.bahasa, styles.bantuanTypo]}>Bahasa</Text>
      <Text style={[styles.pengaturanChat, styles.bantuanTypo]}>
        Pengaturan Chat
      </Text>
      <View style={[styles.tentangakunChild2, styles.tentangakunChildLayout]} />
      <Text style={[styles.pengaturanNotifikasi, styles.bantuanTypo]}>
        Pengaturan Notifikasi
      </Text>
      <View style={[styles.tentangakunChild3, styles.tentangakunChildLayout]} />
      <View
        style={[styles.tentangakunChild4, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.bahasa1, styles.bahasa1Typo]}>Bahasa</Text>
      <Text style={[styles.pusatBantuan, styles.bantuanTypo]}>
        Pusat bantuan
      </Text>
      <View
        style={[styles.tentangakunChild5, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.informasi, styles.bantuanTypo]}>Informasi</Text>
      <View
        style={[styles.tentangakunChild6, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.bahasa, styles.bantuanTypo]}>Bahasa</Text>
      <Text style={[styles.bantuan, styles.bantuanTypo]}>Bantuan</Text>
      <Text style={[styles.pengaturan, styles.bantuanTypo]}>Pengaturan</Text>
      <Text style={[styles.pengaturanAkun, styles.bantuanTypo]}>
        pengaturan akun
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Profile")}
      />
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={styles.download2Icon}
        contentFit="cover"
        source={require("../assets/download-2.png")}
      />
      <View
        style={[styles.tentangakunChild7, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.nilaiKami, styles.bahasa1Typo]}>Nilai kami</Text>
      <View
        style={[styles.tentangakunChild8, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.kebijakanKami, styles.bantuanTypo]}>
        Kebijakan kami
      </Text>
      <View
        style={[styles.tentangakunChild9, styles.tentangakunChildPosition]}
      />
      <Text style={[styles.hapusAkun, styles.bantuanTypo]}>Hapus akun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tentangakunChildLayout: {
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  bantuanTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  tentangakunChildPosition: {
    left: 0,
    position: "absolute",
  },
  bahasa1Typo: {
    top: 478,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tentangakunChild: {
    top: 1785,
    left: 145,
    width: 100,
    height: 85,
    display: "none",
    position: "absolute",
  },
  tentangakunItem: {
    top: 94,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  akunSaya: {
    top: 64,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  akunKeamanan: {
    top: 107,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunInner: {
    top: 132,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  alamatSaya: {
    top: 145,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  rectangleView: {
    top: 169,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  rekeningBank: {
    top: 182,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild1: {
    top: 242,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  bahasa: {
    top: 330,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  pengaturanChat: {
    top: 255,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild2: {
    top: 280,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  pengaturanNotifikasi: {
    top: 293,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild3: {
    top: 317,
    left: -1,
    width: 391,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  tentangakunChild4: {
    top: 390,
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  bahasa1: {
    left: 10,
  },
  pusatBantuan: {
    top: 403,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild5: {
    top: 428,
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  informasi: {
    top: 441,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild6: {
    top: 465,
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  bantuan: {
    top: 366,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  pengaturan: {
    top: 217,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  pengaturanAkun: {
    top: 21,
    left: 134,
    fontSize: FontSize.size_sm,
  },
  rectanglePressable: {
    top: 17,
    left: 19,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 44,
    height: 22,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  arrowIcon: {
    top: 28,
    left: 32,
    maxHeight: "100%",
    width: 18,
    position: "absolute",
  },
  download2Icon: {
    top: 14,
    left: 346,
    borderRadius: Border.br_38xl,
    width: 29,
    height: 29,
    position: "absolute",
  },
  tentangakunChild7: {
    top: 53,
    backgroundColor: Color.colorBlack,
    width: 390,
    height: 2,
  },
  nilaiKami: {
    left: 9,
    top: 478,
  },
  tentangakunChild8: {
    top: 503,
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  kebijakanKami: {
    top: 516,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakunChild9: {
    top: 541,
    height: 39,
    width: 391,
    backgroundColor: Color.colorSnow,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  hapusAkun: {
    top: 554,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    left: 9,
  },
  tentangakun: {
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default TentangAkun;
