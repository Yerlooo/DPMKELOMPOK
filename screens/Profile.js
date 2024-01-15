import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={[styles.profileChild, styles.profileChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={[styles.profileItem, styles.icon3Position]}
        onPress={() => navigation.navigate("Beranda1")}
      />
      <Image
        style={[styles.profileInner, styles.profileLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={styles.settingsIcon1441391}
        contentFit="cover"
        source={require("../assets/settings-icon-144139-1.png")}
      />
      <Image
        style={styles.f670e5213e6a8eb0eea3104acb2671Icon}
        contentFit="cover"
        source={require("../assets/4f670e5213e6a8eb0eea3104acb26715-1.png")}
      />
      <Text style={[styles.yannslurr, styles.akunTypo]}>Yannslurr</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/25694-2.png")}
      />
      <Image
        style={[styles.profileChild1, styles.profileChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.pngwing8Icon}
        contentFit="cover"
        source={require("../assets/pngwing-8.png")}
      />
      <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <Image
        style={[styles.pngwing9Icon, styles.pngwing13Position]}
        contentFit="cover"
        source={require("../assets/pngwing-9.png")}
      />
      <Image
        style={[styles.profileChild3, styles.profileChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.pngwing9Icon, styles.pngwing13Position]}
        contentFit="cover"
        source={require("../assets/pngwing-9.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Pressable
        style={styles.iconPosition}
        onPress={() => navigation.navigate("Beranda1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/25694-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.profileChild1, styles.profileChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.profileChild2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.pngwing8Icon}
        contentFit="cover"
        source={require("../assets/pngwing-8.png")}
      />
      <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <Image
        style={[styles.pngwing9Icon, styles.pngwing13Position]}
        contentFit="cover"
        source={require("../assets/pngwing-9.png")}
      />
      <Image
        style={[styles.profileChild3, styles.profileChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Pressable
        style={[styles.pngwing13, styles.pngwing13Position]}
        onPress={() => navigation.navigate("Keranjang5")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/pngwing-9.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <View style={[styles.profileChild8, styles.rectangleViewBorder]} />
      <View style={[styles.profileChild9, styles.profileChildLayout1]} />
      <Pressable
        style={[styles.rectanglePressable, styles.profileChildLayout1]}
        onPress={() => navigation.navigate("Beranda1")}
      />
      <View style={[styles.profileChild10, styles.profileChildLayout1]} />
      <View style={[styles.profileChild11, styles.profileChildLayout1]} />
      <View style={[styles.profileChild12, styles.profileChildLayout1]} />
      <Pressable
        style={[styles.profileChild13, styles.profileChildLayout1]}
        onPress={() => navigation.navigate("TentangAkun")}
      />
      <View style={[styles.profileChild14, styles.profileChildLayout1]} />
      <Image
        style={styles.pngtreeIllustrationOfADeliIcon}
        contentFit="cover"
        source={require("../assets/pngtreeillustrationofadeliverycarpngimage-6483505-1.png")}
      />
      <Text style={[styles.dikirim, styles.dikirimTypo]}>dikirim</Text>
      <Text style={[styles.beliLagi, styles.beliLagiTypo]}>Beli lagi</Text>
      <Text style={[styles.lihatProdukLainnya, styles.beliLagiTypo]}>
        lihat produk lainnya
      </Text>
      <Text style={[styles.beriPenilaian, styles.dikirimTypo]}>
        beri penilaian
      </Text>
      <Image
        style={styles.star1064231Icon}
        contentFit="cover"
        source={require("../assets/star-106423-1.png")}
      />
      <Text style={[styles.personalInformasi, styles.sayaTypo]}>
        Personal Informasi
      </Text>
      <Image
        style={[styles.icon3, styles.icon3Position]}
        contentFit="cover"
        source={require("../assets/3106773-1.png")}
      />
      <Text style={[styles.yourOrder, styles.sayaTypo]}>your order</Text>
      <Image
        style={[styles.ordersIcon1, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/ordersicon-1.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/2615079-2.png")}
      />
      <Text style={[styles.voucherSaya, styles.sayaTypo]}>voucher saya</Text>
      <Text style={[styles.favoritSaya, styles.sayaTypo]}>favorit saya</Text>
      <Text style={[styles.pengaturanAkun, styles.sayaTypo]}>
        pengaturan akun
      </Text>
      <Text style={[styles.pusatBantuan, styles.sayaTypo]}>pusat bantuan</Text>
      <Image
        style={[styles.icon5, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/412-1.png")}
      />
      <Image
        style={styles.settingsIcon1764401}
        contentFit="cover"
        source={require("../assets/settings-icon-176440-1.png")}
      />
      <Image
        style={[styles.pngtreeQuestionMarkIconPng, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/pngtreequestionmarkiconpngimage-6848334-1.png")}
      />
      <Image
        style={styles.buildingShopRegularIcon203}
        contentFit="cover"
        source={require("../assets/building-shop-regular-icon-203847-2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-26.png")}
      />
      <Image
        style={[styles.profileChild15, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Image
        style={[styles.profileChild16, styles.profileLayout]}
        contentFit="cover"
        source={require("../assets/line-28.png")}
      />
      <Image
        style={styles.profileChild17}
        contentFit="cover"
        source={require("../assets/line-29.png")}
      />
      <View style={[styles.profileChild18, styles.profileChildLayout]} />
      <Image
        style={[styles.icon6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/674642530-1.png")}
      />
      <Text style={[styles.beliLagiDisini, styles.beliTypo]}>
        beli lagi disini
      </Text>
      <Text style={[styles.rp500, styles.rp500Typo]}>Rp. 500</Text>
      <View style={[styles.profileChild19, styles.profileChildLayout]} />
      <Image
        style={[styles.icon7, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/674642530-2.png")}
      />
      <Text style={[styles.beliLagiDisini1, styles.beliTypo]}>
        beli lagi disini
      </Text>
      <Text style={[styles.rp15000, styles.rp500Typo]}>Rp. 15.000</Text>
      <Pressable
        style={[styles.profileChild20, styles.profileChildLayout]}
        onPress={() => navigation.navigate("Keranjang3")}
      />
      <Image
        style={[styles.icon8, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/674642530-3.png")}
      />
      <Text style={[styles.beliLagiDisini2, styles.beliTypo]}>
        beli lagi disini
      </Text>
      <Text style={[styles.rp37000, styles.rp500Typo]}>Rp. 37.000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileChildLayout2: {
    width: 100,
    height: 85,
    left: 145,
    position: "absolute",
  },
  icon3Position: {
    height: 22,
    left: 24,
    position: "absolute",
  },
  profileLayout: {
    width: 18,
    position: "absolute",
  },
  akunTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 724,
    width: 100,
    position: "absolute",
  },
  iconPosition: {
    height: 75,
    width: 76,
    top: 735,
    left: 24,
    position: "absolute",
  },
  homeTypo: {
    top: 812,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  pngwing13Position: {
    width: 85,
    left: 152,
    top: 732,
    height: 78,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  rectangleViewBorder: {
    width: 390,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  profileChildLayout1: {
    height: 37,
    width: 390,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  dikirimTypo: {
    top: 249,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  beliLagiTypo: {
    top: 298,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  sayaTypo: {
    width: 115,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout2: {
    height: 33,
    position: "absolute",
  },
  iconLayout1: {
    width: 32,
    position: "absolute",
  },
  lineIconLayout: {
    height: 4,
    position: "absolute",
  },
  profileChildLayout: {
    height: 121,
    width: 104,
    backgroundColor: Color.colorSnow,
    top: 323,
    position: "absolute",
  },
  iconLayout: {
    height: 99,
    width: 98,
    top: 326,
    position: "absolute",
  },
  beliTypo: {
    height: 8,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_7xs,
    top: 427,
    width: 73,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  rp500Typo: {
    color: Color.colorRed,
    top: 436,
    height: 8,
    fontSize: FontSize.size_7xs,
    width: 73,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  profileChild: {
    top: 1785,
    display: "none",
    height: 85,
  },
  profileItem: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 44,
    borderWidth: 1,
    height: 22,
    top: 21,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
  profileInner: {
    top: 32,
    left: 37,
    maxHeight: "100%",
  },
  settingsIcon1441391: {
    left: 335,
    width: 30,
    height: 30,
    top: 21,
    position: "absolute",
  },
  f670e5213e6a8eb0eea3104acb2671Icon: {
    top: 61,
    borderRadius: 50,
    width: 99,
    height: 102,
    left: 145,
    position: "absolute",
  },
  yannslurr: {
    top: 169,
    left: 165,
  },
  ellipseIcon: {
    left: 12,
    height: 100,
  },
  icon: {
    borderRadius: Border.br_90xl_5,
  },
  profileChild1: {
    top: 717,
    height: 85,
  },
  profileChild2: {
    left: 278,
    height: 85,
  },
  pngwing8Icon: {
    left: 291,
    height: 74,
    width: 73,
    top: 735,
    position: "absolute",
  },
  akun: {
    top: 815,
    left: 313,
  },
  home: {
    left: 44,
  },
  transaksi: {
    left: 167,
  },
  pngwing9Icon: {
    height: 78,
    borderRadius: Border.br_xl,
  },
  profileChild3: {
    top: 718,
    height: 85,
  },
  icon1: {
    borderRadius: Border.br_90xl_5,
  },
  icon2: {
    borderRadius: Border.br_xl,
  },
  pngwing13: {
    height: 78,
  },
  rectangleView: {
    top: 191,
    left: 0,
    height: 78,
  },
  profileChild8: {
    top: 281,
    left: 5,
    height: 166,
  },
  profileChild9: {
    top: 479,
    left: 0,
  },
  rectanglePressable: {
    top: 284,
    left: 0,
  },
  profileChild10: {
    top: 514,
    left: 0,
  },
  profileChild11: {
    top: 551,
    left: 0,
  },
  profileChild12: {
    top: 587,
    left: 0,
  },
  profileChild13: {
    top: 636,
    left: 0,
  },
  profileChild14: {
    top: 672,
    left: 1,
  },
  pngtreeIllustrationOfADeliIcon: {
    top: 203,
    left: 98,
    width: 64,
    height: 44,
    position: "absolute",
  },
  dikirim: {
    left: 95,
    height: 13,
    width: 70,
  },
  beliLagi: {
    left: 42,
    width: 70,
  },
  lihatProdukLainnya: {
    left: 242,
    width: 136,
  },
  beriPenilaian: {
    width: 95,
    left: 225,
    height: 13,
  },
  star1064231Icon: {
    top: 201,
    left: 254,
    width: 42,
    height: 49,
    position: "absolute",
  },
  personalInformasi: {
    top: 495,
    left: 68,
    height: 12,
  },
  icon3: {
    top: 490,
    width: 22,
  },
  yourOrder: {
    top: 528,
    left: 43,
    height: 13,
  },
  ordersIcon1: {
    top: 518,
    width: 29,
    left: 24,
    height: 33,
  },
  icon4: {
    top: 556,
    left: 21,
    height: 30,
  },
  voucherSaya: {
    top: 564,
    left: 51,
    height: 13,
  },
  favoritSaya: {
    top: 599,
    left: 47,
    height: 13,
  },
  pengaturanAkun: {
    top: 649,
    left: 61,
    height: 13,
  },
  pusatBantuan: {
    top: 683,
    left: 54,
    height: 13,
  },
  icon5: {
    top: 589,
    left: 20,
    width: 33,
  },
  settingsIcon1764401: {
    top: 635,
    left: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  pngtreeQuestionMarkIconPng: {
    top: 673,
    left: 23,
    height: 36,
  },
  buildingShopRegularIcon203: {
    top: 287,
    left: 15,
    width: 31,
    height: 31,
    position: "absolute",
  },
  lineIcon: {
    top: 300,
    left: 374,
    width: 6,
  },
  profileChild15: {
    top: 304,
    left: 375,
    width: 5,
  },
  profileChild16: {
    top: 368,
    left: 355,
    height: 16,
  },
  profileChild17: {
    top: 381,
    left: 361,
    width: 14,
    height: 19,
    position: "absolute",
  },
  profileChild18: {
    left: 10,
  },
  icon6: {
    left: 13,
  },
  beliLagiDisini: {
    left: -3,
  },
  rp500: {
    left: -11,
  },
  profileChild19: {
    left: 122,
  },
  icon7: {
    left: 125,
  },
  beliLagiDisini1: {
    left: 109,
  },
  rp15000: {
    left: 105,
  },
  profileChild20: {
    left: 238,
  },
  icon8: {
    left: 241,
  },
  beliLagiDisini2: {
    left: 225,
  },
  rp37000: {
    left: 221,
  },
  profile: {
    borderWidth: 2,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default Profile;
