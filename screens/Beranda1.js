import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Beranda1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beranda}>
      <View style={styles.berandaChild} />
      <Pressable
        style={[styles.berandaItem, styles.jlPorosSp4Layout]}
        onPress={() => navigation.navigate("Pencaharian")}
      />
      <Pressable
        style={[styles.pngClipartShoppingCartComp, styles.download52Layout]}
        onPress={() => navigation.navigate("Keranjang5")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/pngclipartshoppingcartcomputericonsshoppingcartangleshoppingcentre-1.png")}
        />
      </Pressable>
      <Image
        style={styles.pngtreeSearchIconImage1344}
        contentFit="cover"
        source={require("../assets/pngtreesearchiconimage-1344447-2.png")}
      />
      <Image
        style={styles.berandaInner}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/25694-2.png")}
      />
      <Image
        style={[styles.img20220609Wa00241Icon, styles.download21Layout]}
        contentFit="cover"
        source={require("../assets/12img20220609wa0024-1.png")}
      />
      <Image
        style={[styles.download21, styles.download21Layout]}
        contentFit="cover"
        source={require("../assets/download-2-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.berandaChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.berandaItemBorder]}
        onPress={() => navigation.navigate("Keranjang")}
      />
      <Text
        style={[styles.ada5Voucher, styles.jlPorosSp4FlexBox]}
      >{`Ada 5 voucher buat kamu      >`}</Text>
      <Image
        style={[styles.icon2, styles.icon2Layout]}
        contentFit="cover"
        source={require("../assets/2615079-2.png")}
      />
      <Text style={styles.text}>-----</Text>
      <View style={[styles.rectangleView, styles.lineIconLayout]} />
      <View style={[styles.berandaChild2, styles.berandaChildPosition4]} />
      <View style={[styles.berandaChild3, styles.berandaChildPosition3]} />
      <View style={[styles.berandaChild4, styles.berandaChildPosition2]} />
      <View style={[styles.berandaChild5, styles.lineIconLayout]} />
      <View style={[styles.berandaChild6, styles.berandaChildPosition4]} />
      <View style={[styles.berandaChild7, styles.berandaChildPosition3]} />
      <View style={[styles.berandaChild8, styles.berandaChildPosition2]} />
      <Text style={[styles.sanitary, styles.sandTypo]}>sanitary</Text>
      <Image
        style={styles.paintsIcon}
        contentFit="cover"
        source={require("../assets/paints.png")}
      />
      <Text style={[styles.plumbing, styles.plumbingPosition]}>plumbing</Text>
      <Text style={[styles.sand, styles.sandTypo]}>sand</Text>
      <Text style={[styles.lainnya, styles.sandTypo]}>lainnya</Text>
      <Text style={styles.barangDiskon}>barang diskon :</Text>
      <Text style={[styles.flooring, styles.flooringPosition]}>flooring</Text>
      <Text style={[styles.wood, styles.sandTypo]}>wood</Text>
      <Text style={[styles.handTools, styles.sandTypo]}>hand tools</Text>
      <Image
        style={[styles.woodIcon1580501, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/wood-icon-158050-4.png")}
      />
      <Image
        style={[styles.squaresFourIcon1735521, styles.download42Layout1]}
        contentFit="cover"
        source={require("../assets/squares-four-icon-173552-1.png")}
      />
      <Image
        style={[styles.paint765249512801Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/paint7652495-1280-4.png")}
      />
      <Image
        style={[styles.pngtreeSandCartoonPictureIIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/pngtreesandcartoonpictureimage-9118744-4.png")}
      />
      <Image
        style={[styles.pipeIcon1373021, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/pipe-icon-137302-4.png")}
      />
      <View style={[styles.berandaChild9, styles.berandaChildLayout3]} />
      <View style={[styles.berandaChild10, styles.berandaChildLayout3]} />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/8-11.png")}
      />
      <Text style={[styles.rucikaFittingPipa, styles.philipsLed10Typo]}>
        rucika fitting pipa standard JIS k -6743 Socket1/2 inch (AW)
      </Text>
      <Image
        style={[styles.berandaChild11, styles.berandaChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Pressable
        style={styles.pngwing4}
        onPress={() => navigation.navigate("Keranjang5")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/pngwing-9.png")}
        />
      </Pressable>
      <Image
        style={[styles.berandaChild12, styles.berandaChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <View style={[styles.berandaChild13, styles.berandaChildLayout1]} />
      <Text style={[styles.text1, styles.textTypo1]}>2%</Text>
      <Text style={[styles.rp1862, styles.rp1862Typo]}>Rp 1.862</Text>
      <Text style={[styles.rp1900, styles.rp1900Clr]}>Rp 1.900</Text>
      <Pressable
        style={styles.pngwing5}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/pngwing-8.png")}
        />
      </Pressable>
      <Text style={[styles.home, styles.sandTypo]}>Home</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.philipsLed10, styles.philipsLed10Typo]}>
        Philips LED 10 Watt (Bulb) – Lampu Philips
      </Text>
      <View style={[styles.berandaChild14, styles.berandaChildLayout1]} />
      <Text style={[styles.text2, styles.textTypo1]}>2%</Text>
      <Text style={[styles.rp18621, styles.rp1862Typo]}>Rp 1.862</Text>
      <Text style={[styles.rp19001, styles.rp19001Position]}>Rp 1.900</Text>
      <View style={[styles.berandaChild15, styles.lineViewLayout]} />
      <Text style={[styles.transaksi, styles.bukaMapsTypo]}>Transaksi</Text>
      <Text style={[styles.akun, styles.sandTypo]}>Akun</Text>
      <Image
        style={[styles.lampuPhilipsLedBulb10WattIcon, styles.lampuIconLayout]}
        contentFit="cover"
        source={require("../assets/lampuphilipsledbulb10watt-1.png")}
      />
      <View style={[styles.berandaChild16, styles.berandaChildPosition1]} />
      <View style={[styles.berandaChild17, styles.berandaChildPosition1]} />
      <Image
        style={[styles.icon6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/8-2.png")}
      />
      <Text style={[styles.kuasCat3, styles.martilTypo]}>kuas cat 3 inchi</Text>
      <View style={[styles.berandaChild18, styles.berandaChildLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>2%</Text>
      <Text style={[styles.rp19600, styles.rp19600Typo]}>Rp 19.600</Text>
      <Text style={[styles.rp20000, styles.textTypo]}>Rp 20.000</Text>
      <View style={[styles.berandaChild19, styles.berandaChildPosition]} />
      <Text style={[styles.martil, styles.martilTypo]}>martil</Text>
      <View style={[styles.berandaChild20, styles.berandaChildLayout]} />
      <Text style={[styles.text4, styles.textTypo]}>3%</Text>
      <Text style={[styles.rp29100, styles.rp19600Typo]}>Rp 29.100</Text>
      <Text style={[styles.rp30000, styles.textTypo]}>Rp 30.000</Text>
      <View style={[styles.berandaChild21, styles.berandaChildPosition]} />
      <Image
        style={[styles.lampuPhilipsLedBulb10WattIcon1, styles.lampuIconLayout]}
        contentFit="cover"
        source={require("../assets/lampuphilipsledbulb10watt-2.png")}
      />
      <Image
        style={styles.ilustrasiTokoBahanDanAlatIcon}
        contentFit="cover"
        source={require("../assets/ilustrasitokobahandanalatbangunan-1.png")}
      />
      <Text style={[styles.brandBangunan, styles.brandBangunanTypo]}>
        Brand bangunan
      </Text>
      <Image
        style={[styles.logoRucikaDimanaAirMengaliIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logorucikadimanaairmengalirsampaijauh-1.png")}
      />
      <Image
        style={styles.philipsLogo1Icon}
        contentFit="cover"
        source={require("../assets/philipslogo-1.png")}
      />
      <Image
        style={styles.download32}
        contentFit="cover"
        source={require("../assets/download-3-2.png")}
      />
      <Image
        style={styles.download41}
        contentFit="cover"
        source={require("../assets/download-4-1.png")}
      />
      <Image
        style={styles.imagesPhoto2ADulux8881Icon}
        contentFit="cover"
        source={require("../assets/images-photo2-adulux888-1.png")}
      />
      <Image
        style={[styles.panasonicLogoBlue1Icon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/panasonic-logo-blue-1.png")}
      />
      <Image
        style={[styles.pxSanyoLogo1Icon, styles.plumbingPosition]}
        contentFit="cover"
        source={require("../assets/1200pxsanyo-logo-1.png")}
      />
      <View style={styles.berandaChild22} />
      <Text style={[styles.lihatSemuaBrand, styles.brandTypo]}>
        Lihat Semua Brand
      </Text>
      <Image
        style={styles.logoUiuxBangunan2}
        contentFit="cover"
        source={require("../assets/logo-uiux-bangunan-2.png")}
      />
      <Text style={[styles.nizomBuildingShop, styles.mapPin26961IconLayout]}>
        NIZOM BUILDING SHOP
      </Text>
      <Text style={[styles.jlPorosSp4, styles.jlPorosSp4FlexBox]}>
        Jl. Poros sp.4 kota baru rt 4/rw 2 kec. Tapung Hilir kab. Kampar
      </Text>
      <Pressable
        style={[styles.berandaChild23, styles.icon2Layout]}
        onPress={() => navigation.navigate("Pengiriman")}
      />
      <Image
        style={[styles.mapPin26961Icon, styles.mapPin26961IconLayout]}
        contentFit="cover"
        source={require("../assets/mappin2696-1.png")}
      />
      <Text style={[styles.bukaMaps, styles.bukaMapsTypo]}>Buka Maps</Text>
      <Text style={[styles.hubungiKamiMelalui, styles.brandBangunanTypo]}>
        hubungi kami melalui
      </Text>
      <Text style={[styles.ikutiSosialMedia, styles.brandBangunanTypo]}>
        ikuti sosial media kami
      </Text>
      <Text style={[styles.teleponwhatsap6285765434, styles.textTypo1]}>
        telepon/whatsap +62 857-6543-4379
      </Text>
      <Image
        style={[styles.facebookLogoIcon1437861, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-logo-icon-143786-1.png")}
      />
      <Image
        style={[styles.instagramNew2016GlyphLogoIcon, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/instagramnew2016glyphlogo84cb825424seeklogo-1.png")}
      />
      <Image
        style={[styles.youtubeLogoIcon2066271, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/youtube-logo-icon-206627-1.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.lineViewLayout]}
        contentFit="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-301.png")}
      />
      <Image
        style={[styles.product500x5001Icon, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/product500x500-4.png")}
      />
      <Image
        style={[
          styles.homeguideWorkerInstallingNeIcon,
          styles.flooringPosition,
        ]}
        contentFit="cover"
        source={require("../assets/homeguideworkerinstallingnewflooringinhome-4.png")}
      />
      <Image
        style={[styles.download42, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/download-4-5.png")}
      />
      <Image
        style={[styles.woodIcon1580501, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/wood-icon-158050-4.png")}
      />
      <Image
        style={[styles.paint765249512801Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/paint7652495-1280-4.png")}
      />
      <Image
        style={[styles.pngtreeSandCartoonPictureIIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/pngtreesandcartoonpictureimage-9118744-4.png")}
      />
      <Image
        style={[styles.pipeIcon1373021, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/pipe-icon-137302-4.png")}
      />
      <Image
        style={[styles.product500x5001Icon, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/product500x500-4.png")}
      />
      <Image
        style={[
          styles.homeguideWorkerInstallingNeIcon,
          styles.flooringPosition,
        ]}
        contentFit="cover"
        source={require("../assets/homeguideworkerinstallingnewflooringinhome-4.png")}
      />
      <Image
        style={[styles.download42, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/download-4-5.png")}
      />
      <Text style={[styles.sanitary, styles.sandTypo]}>sanitary</Text>
      <Image
        style={styles.paintsIcon}
        contentFit="cover"
        source={require("../assets/paints.png")}
      />
      <Text style={[styles.plumbing, styles.plumbingPosition]}>plumbing</Text>
      <Text style={[styles.sand, styles.sandTypo]}>sand</Text>
      <Text style={[styles.flooring, styles.flooringPosition]}>flooring</Text>
      <Text style={[styles.wood, styles.sandTypo]}>wood</Text>
      <Text style={[styles.handTools, styles.sandTypo]}>hand tools</Text>
      <Image
        style={[styles.woodIcon1580501, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/wood-icon-158050-4.png")}
      />
      <Image
        style={[styles.paint765249512801Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/paint7652495-1280-4.png")}
      />
      <Image
        style={[styles.pngtreeSandCartoonPictureIIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/pngtreesandcartoonpictureimage-9118744-4.png")}
      />
      <Image
        style={[styles.pipeIcon1373021, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/pipe-icon-137302-4.png")}
      />
      <Image
        style={[styles.product500x5001Icon, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/product500x500-4.png")}
      />
      <Image
        style={[
          styles.homeguideWorkerInstallingNeIcon,
          styles.flooringPosition,
        ]}
        contentFit="cover"
        source={require("../assets/homeguideworkerinstallingnewflooringinhome-4.png")}
      />
      <Image
        style={[styles.download42, styles.download42Layout]}
        contentFit="cover"
        source={require("../assets/download-4-5.png")}
      />
      <Pressable
        style={[styles.download52, styles.download52Layout]}
        onPress={() => navigation.navigate("Keranjang4")}
      >
        <Image
          style={[styles.icon7, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/download-5-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  jlPorosSp4Layout: {
    width: 279,
    position: "absolute",
  },
  download52Layout: {
    height: 29,
    width: 29,
    top: 16,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  download21Layout: {
    height: 269,
    width: 161,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 8,
    width: 8,
    top: 349,
    position: "absolute",
  },
  berandaItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  jlPorosSp4FlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  icon2Layout: {
    height: 30,
    position: "absolute",
  },
  lineIconLayout: {
    height: 60,
    position: "absolute",
  },
  berandaChildPosition4: {
    left: 109,
    height: 60,
    width: 60,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  berandaChildPosition3: {
    left: 208,
    height: 60,
    width: 60,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  berandaChildPosition2: {
    left: 306,
    height: 60,
    width: 60,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  sandTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  plumbingPosition: {
    left: 112,
    position: "absolute",
  },
  flooringPosition: {
    left: 115,
    position: "absolute",
  },
  iconLayout2: {
    width: 50,
    height: 40,
    position: "absolute",
  },
  download42Layout1: {
    width: 51,
    left: 310,
  },
  iconLayout1: {
    width: 56,
    position: "absolute",
  },
  berandaChildLayout3: {
    height: 124,
    width: 159,
    top: 694,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    height: 98,
    width: 130,
    left: 35,
    position: "absolute",
  },
  philipsLed10Typo: {
    width: 138,
    top: 823,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    color: Color.colorBlack,
    position: "absolute",
  },
  berandaChildLayout2: {
    height: 85,
    top: 1785,
    position: "absolute",
    width: 100,
  },
  berandaChildLayout1: {
    width: 23,
    top: 872,
    height: 15,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  rp1862Typo: {
    color: Color.colorRed,
    top: 859,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  rp1900Clr: {
    color: Color.colorDarkgray_200,
    left: 51,
  },
  lineViewLayout: {
    height: 1,
    position: "absolute",
  },
  rp19001Position: {
    left: 238,
    color: Color.colorDarkgray_200,
  },
  bukaMapsTypo: {
    left: 173,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  lampuIconLayout: {
    height: 95,
    width: 131,
    left: 221,
    position: "absolute",
  },
  berandaChildPosition1: {
    top: 905,
    height: 124,
    width: 159,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  martilTypo: {
    top: 1034,
    width: 138,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    color: Color.colorBlack,
    position: "absolute",
  },
  berandaChildLayout: {
    top: 1083,
    width: 23,
    height: 15,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  textTypo: {
    top: 1086,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  rp19600Typo: {
    top: 1070,
    color: Color.colorRed,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  berandaChildPosition: {
    top: 1091,
    height: 1,
    width: 52,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    position: "absolute",
    borderStyle: "solid",
  },
  brandBangunanTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.aldrich,
  },
  logoIconPosition: {
    top: 1194,
    position: "absolute",
  },
  brandTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  mapPin26961IconLayout: {
    height: 22,
    position: "absolute",
  },
  logoIconLayout: {
    height: 27,
    width: 26,
    top: 1718,
    position: "absolute",
  },
  download42Layout: {
    height: 43,
    position: "absolute",
  },
  berandaChild: {
    height: 100,
    width: 100,
  },
  berandaItem: {
    top: 9,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPeachpuff,
    width: 279,
  },
  icon: {
    borderRadius: Border.br_90xl,
  },
  pngClipartShoppingCartComp: {
    left: 303,
  },
  pngtreeSearchIconImage1344: {
    top: 21,
    left: 33,
    borderRadius: Border.br_46xl_5,
    width: 19,
    height: 19,
    position: "absolute",
  },
  berandaInner: {
    left: 12,
    top: 1785,
    position: "absolute",
    height: 100,
    width: 100,
  },
  icon1: {
    borderRadius: Border.br_90xl_5,
    width: 76,
    height: 75,
    left: 24,
    top: 1796,
    position: "absolute",
  },
  img20220609Wa00241Icon: {
    top: 66,
    left: 21,
  },
  download21: {
    top: 67,
    left: 205,
  },
  ellipseIcon: {
    left: 201,
  },
  berandaChild1: {
    left: 174,
  },
  rectanglePressable: {
    top: 371,
    left: 10,
    width: 370,
    height: 40,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  ada5Voucher: {
    left: 60,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    top: 376,
    position: "absolute",
  },
  icon2: {
    left: 15,
    width: 32,
    top: 376,
    height: 30,
  },
  text: {
    top: 370,
    left: 349,
    color: Color.colorGainsboro_200,
    transform: [
      {
        rotate: "89.81deg",
      },
    ],
    height: 15,
    width: 41,
    fontFamily: FontFamily.aldrich,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    width: 60,
    left: 14,
    height: 60,
    backgroundColor: Color.colorWhite,
    top: 419,
  },
  berandaChild2: {
    top: 419,
  },
  berandaChild3: {
    top: 419,
  },
  berandaChild4: {
    top: 419,
  },
  berandaChild5: {
    top: 531,
    width: 60,
    left: 14,
    height: 60,
    backgroundColor: Color.colorWhite,
  },
  berandaChild6: {
    top: 531,
  },
  berandaChild7: {
    top: 531,
  },
  berandaChild8: {
    top: 531,
  },
  sanitary: {
    left: 20,
    top: 484,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  paintsIcon: {
    left: 25,
    width: 37,
    height: 11,
    top: 595,
    position: "absolute",
  },
  plumbing: {
    top: 595,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
  },
  sand: {
    left: 224,
    top: 595,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  lainnya: {
    left: 314,
    top: 595,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  barangDiskon: {
    top: 643,
    left: 6,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.aldrich,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  flooring: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    top: 484,
    fontFamily: FontFamily.aldrich,
  },
  wood: {
    left: 222,
    top: 484,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  handTools: {
    left: 304,
    top: 484,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  woodIcon1580501: {
    left: 213,
    top: 429,
  },
  squaresFourIcon1735521: {
    top: 528,
    height: 67,
    position: "absolute",
  },
  paint765249512801Icon: {
    top: 533,
    left: 16,
    height: 56,
  },
  pngtreeSandCartoonPictureIIcon: {
    height: 55,
    left: 210,
    top: 531,
  },
  pipeIcon1373021: {
    top: 541,
    left: 114,
  },
  berandaChild9: {
    left: 20,
  },
  berandaChild10: {
    left: 207,
  },
  icon3: {
    top: 707,
  },
  rucikaFittingPipa: {
    left: 20,
  },
  berandaChild11: {
    left: 145,
  },
  icon4: {
    borderRadius: Border.br_xl,
  },
  pngwing4: {
    left: 152,
    top: 1799,
    width: 85,
    height: 78,
    position: "absolute",
  },
  berandaChild12: {
    left: 278,
  },
  berandaChild13: {
    left: 20,
  },
  text1: {
    left: 23,
    color: Color.colorBlack,
    top: 875,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  rp1862: {
    left: 20,
  },
  rp1900: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
    top: 875,
    textAlign: "left",
  },
  pngwing5: {
    left: 290,
    width: 73,
    height: 74,
    top: 1796,
    position: "absolute",
  },
  home: {
    left: 44,
    top: 1873,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  lineView: {
    width: 52,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    top: 880,
    height: 1,
    borderStyle: "solid",
    left: 49,
  },
  philipsLed10: {
    left: 207,
  },
  berandaChild14: {
    left: 207,
  },
  text2: {
    top: 875,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 210,
    color: Color.colorBlack,
  },
  rp18621: {
    left: 207,
  },
  rp19001: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
    top: 875,
    textAlign: "left",
  },
  berandaChild15: {
    left: 236,
    width: 52,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    top: 880,
    height: 1,
    borderStyle: "solid",
  },
  transaksi: {
    top: 1873,
  },
  akun: {
    left: 313,
    top: 1873,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  lampuPhilipsLedBulb10WattIcon: {
    top: 708,
  },
  berandaChild16: {
    left: 20,
  },
  berandaChild17: {
    left: 207,
  },
  icon6: {
    top: 918,
  },
  kuasCat3: {
    left: 20,
  },
  berandaChild18: {
    left: 20,
  },
  text3: {
    left: 23,
    color: Color.colorBlack,
  },
  rp19600: {
    left: 20,
  },
  rp20000: {
    color: Color.colorDarkgray_200,
    left: 51,
  },
  berandaChild19: {
    left: 49,
  },
  martil: {
    left: 212,
  },
  berandaChild20: {
    left: 207,
  },
  text4: {
    left: 210,
    color: Color.colorBlack,
  },
  rp29100: {
    left: 207,
  },
  rp30000: {
    left: 238,
    color: Color.colorDarkgray_200,
  },
  berandaChild21: {
    left: 236,
  },
  lampuPhilipsLedBulb10WattIcon1: {
    top: 919,
  },
  ilustrasiTokoBahanDanAlatIcon: {
    top: 1152,
    left: 1,
    width: 389,
    height: 255,
    position: "absolute",
  },
  brandBangunan: {
    top: 1170,
    left: 130,
    color: Color.colorWhite,
    width: 158,
    height: 24,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  logoRucikaDimanaAirMengaliIcon: {
    width: 84,
    height: 40,
    left: 12,
  },
  philipsLogo1Icon: {
    top: 1192,
    left: 117,
    width: 129,
    height: 34,
    position: "absolute",
  },
  download32: {
    top: 1257,
    width: 75,
    height: 54,
    left: 303,
    position: "absolute",
  },
  download41: {
    top: 1272,
    left: 197,
    width: 72,
    height: 31,
    position: "absolute",
  },
  imagesPhoto2ADulux8881Icon: {
    top: 1265,
    width: 74,
    height: 38,
    left: 12,
    position: "absolute",
  },
  panasonicLogoBlue1Icon: {
    left: 262,
    width: 122,
    height: 21,
  },
  pxSanyoLogo1Icon: {
    top: 1276,
    width: 67,
    height: 16,
  },
  berandaChild22: {
    top: 1335,
    left: 102,
    width: 214,
    height: 44,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  lihatSemuaBrand: {
    top: 1348,
    left: 118,
    fontFamily: FontFamily.aldrich,
    color: Color.colorBlack,
  },
  logoUiuxBangunan2: {
    top: 1418,
    left: 144,
    borderRadius: Border.br_89xl,
    width: 102,
    height: 108,
    position: "absolute",
  },
  nizomBuildingShop: {
    marginLeft: -171,
    top: 1531,
    left: "50%",
    fontSize: FontSize.size_5xl,
    width: 343,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.aldrich,
    textAlign: "center",
    color: Color.colorBlack,
  },
  jlPorosSp4: {
    top: 1565,
    left: 55,
    fontSize: FontSize.size_sm,
    height: 36,
    fontFamily: FontFamily.aldrich,
    width: 279,
    position: "absolute",
  },
  berandaChild23: {
    top: 1601,
    width: 109,
    left: 140,
    backgroundColor: Color.colorWhite,
  },
  mapPin26961Icon: {
    top: 1605,
    width: 27,
    left: 140,
  },
  bukaMaps: {
    top: 1610,
  },
  hubungiKamiMelalui: {
    top: 1651,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    left: 12,
    position: "absolute",
  },
  ikutiSosialMedia: {
    top: 1691,
    left: 8,
    width: 143,
    height: 13,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  teleponwhatsap6285765434: {
    top: 1670,
    left: 2,
    width: 237,
    textAlign: "center",
    color: Color.colorBlack,
  },
  facebookLogoIcon1437861: {
    left: 140,
  },
  instagramNew2016GlyphLogoIcon: {
    left: 182,
  },
  youtubeLogoIcon2066271: {
    left: 224,
  },
  arrowIcon: {
    top: 50,
    left: -337,
    width: 337,
  },
  lineIcon: {
    top: -60,
    left: 172,
    width: 1,
  },
  product500x5001Icon: {
    top: 427,
    width: 41,
    height: 43,
    left: 24,
  },
  homeguideWorkerInstallingNeIcon: {
    width: 48,
    top: 429,
    height: 40,
  },
  download42: {
    width: 51,
    left: 310,
    top: 429,
  },
  icon7: {
    borderRadius: Border.br_mid,
  },
  download52: {
    left: 345,
  },
  beranda: {
    borderWidth: 2,
    flex: 1,
    height: 1911,
    width: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default Beranda1;
