import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Kategori = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kategori}>
      <Image
        style={styles.kategoriChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.kategoriChild}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={styles.kategoriInner}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Pencaharian")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <Text style={[styles.cariBerdasarkanKategori, styles.paintsIconLayout]}>
        Cari berdasarkan kategori
      </Text>
      <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild1, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild2, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild3, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild4, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild5, styles.rectangleChildLayout]} />
      <View style={[styles.kategoriChild6, styles.rectangleChildLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleChildLayout]}
        onPress={() => navigation.navigate("TampilanDalamKategori")}
      />
      <View style={[styles.kategoriChild7, styles.kategoriChildPosition]} />
      <View style={[styles.kategoriChild8, styles.kategoriChildPosition]} />
      <View style={[styles.kategoriChild9, styles.kategoriChildPosition]} />
      <View style={[styles.kategoriChild10, styles.kategoriChildPosition]} />
      <View style={[styles.kategoriChild11, styles.rectangleChildLayout]} />
      <Text style={[styles.builders, styles.sandTypo]}>builders</Text>
      <Text style={[styles.sanitary, styles.woodTypo]}>sanitary</Text>
      <Image
        style={[styles.paintsIcon, styles.paintsIconLayout]}
        contentFit="cover"
        source={require("../assets/paints.png")}
      />
      <Text style={[styles.plumbing, styles.sandTypo]}>plumbing</Text>
      <Text style={styles.houseware}>houseware</Text>
      <Text style={[styles.fasteners, styles.sandTypo]}>fasteners</Text>
      <Text
        style={[styles.lawnGarden, styles.lawnGardenTypo]}
      >{`lawn & garden`}</Text>
      <Text style={[styles.powerTools, styles.lawnGardenTypo]}>
        power tools
      </Text>
      <Text style={[styles.sportingGoods, styles.lawnGardenTypo]}>
        sporting goods
      </Text>
      <Text style={[styles.sand, styles.sandTypo]}>sand</Text>
      <Text style={[styles.flooring, styles.woodTypo]}>flooring</Text>
      <Text style={[styles.wood, styles.woodTypo]}>wood</Text>
      <Image
        style={[styles.woodIcon1580504, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/wood-icon-158050-4.png")}
      />
      <Image
        style={[styles.paint765249512804Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/paint7652495-1280-4.png")}
      />
      <Image
        style={[styles.pngtreeSandCartoonPictureIIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pngtreesandcartoonpictureimage-9118744-4.png")}
      />
      <Image
        style={[styles.pipeIcon1373024, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/pipe-icon-137302-4.png")}
      />
      <Image
        style={styles.product500x5004Icon}
        contentFit="cover"
        source={require("../assets/product500x500-4.png")}
      />
      <Image
        style={[styles.homeguideWorkerInstallingNeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/homeguideworkerinstallingnewflooringinhome-4.png")}
      />
      <Image
        style={[styles.download45, styles.downloadLayout1]}
        contentFit="cover"
        source={require("../assets/download-4-5.png")}
      />
      <Image
        style={[styles.download51, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-5-1.png")}
      />
      <Text style={[styles.handTools, styles.woodTypo]}>hand tools</Text>
      <Image
        style={[styles.download61, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-6-1.png")}
      />
      <Image
        style={[styles.download71, styles.downloadLayout]}
        contentFit="cover"
        source={require("../assets/download-7-1.png")}
      />
      <Image
        style={styles.pixabay1Icon}
        contentFit="cover"
        source={require("../assets/pixabay-1.png")}
      />
      <Image
        style={[styles.download91, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download-9-1.png")}
      />
      <Image
        style={[styles.download101, styles.downloadLayout1]}
        contentFit="cover"
        source={require("../assets/download-10-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paintsIconLayout: {
    height: 11,
    position: "absolute",
  },
  rectangleChildLayout: {
    height: 60,
    width: 60,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  kategoriChildPosition: {
    top: 329,
    height: 60,
    width: 60,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  sandTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  woodTypo: {
    top: 181,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  lawnGardenTypo: {
    fontSize: FontSize.size_3xs,
    top: 393,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    width: 56,
    position: "absolute",
  },
  downloadLayout1: {
    width: 51,
    position: "absolute",
  },
  downloadLayout: {
    height: 48,
    position: "absolute",
  },
  kategoriChild: {
    bottom: 1120,
    left: -96,
    width: 582,
    height: 1774,
    position: "absolute",
  },
  kategoriInner: {
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
    left: 11,
    top: 63,
    width: 22,
    height: 16,
    position: "absolute",
  },
  cariBerdasarkanKategori: {
    top: 62,
    left: 63,
    fontSize: FontSize.size_lg,
    width: 258,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    height: 11,
  },
  rectangleView: {
    left: 16,
    top: 116,
    width: 60,
    backgroundColor: Color.colorWhite,
  },
  kategoriChild1: {
    left: 111,
    top: 116,
    width: 60,
    backgroundColor: Color.colorWhite,
  },
  kategoriChild2: {
    left: 210,
    top: 116,
    width: 60,
    backgroundColor: Color.colorWhite,
  },
  kategoriChild3: {
    left: 308,
    top: 116,
    width: 60,
    backgroundColor: Color.colorWhite,
  },
  kategoriChild4: {
    top: 228,
    left: 16,
  },
  kategoriChild5: {
    top: 228,
    left: 111,
  },
  kategoriChild6: {
    top: 228,
    left: 210,
  },
  rectanglePressable: {
    top: 228,
    left: 308,
  },
  kategoriChild7: {
    left: 16,
  },
  kategoriChild8: {
    left: 111,
  },
  kategoriChild9: {
    left: 210,
  },
  kategoriChild10: {
    left: 308,
  },
  kategoriChild11: {
    top: 441,
    left: 16,
  },
  builders: {
    left: 314,
    top: 292,
  },
  sanitary: {
    left: 22,
  },
  paintsIcon: {
    left: 27,
    width: 37,
    top: 292,
  },
  plumbing: {
    left: 114,
    top: 292,
  },
  houseware: {
    left: 13,
    top: 393,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  fasteners: {
    top: 505,
    left: 16,
  },
  lawnGarden: {
    left: 104,
  },
  powerTools: {
    left: 210,
  },
  sportingGoods: {
    left: 300,
  },
  sand: {
    left: 226,
    top: 292,
  },
  flooring: {
    left: 117,
  },
  wood: {
    left: 224,
  },
  woodIcon1580504: {
    left: 215,
    width: 50,
    height: 40,
    top: 126,
  },
  paint765249512804Icon: {
    top: 230,
    left: 18,
    height: 56,
  },
  pngtreeSandCartoonPictureIIcon: {
    left: 212,
    height: 55,
    top: 228,
  },
  pipeIcon1373024: {
    top: 238,
    left: 116,
    width: 50,
    height: 40,
  },
  product500x5004Icon: {
    top: 124,
    width: 41,
    height: 43,
    left: 26,
    position: "absolute",
  },
  homeguideWorkerInstallingNeIcon: {
    width: 48,
    top: 126,
    left: 117,
  },
  download45: {
    left: 312,
    height: 43,
    top: 126,
  },
  download51: {
    width: 40,
    top: 335,
    height: 48,
    left: 26,
  },
  handTools: {
    left: 306,
  },
  download61: {
    top: 234,
    left: 316,
    width: 45,
  },
  download71: {
    left: 119,
    width: 44,
    top: 335,
    height: 48,
  },
  pixabay1Icon: {
    top: 338,
    left: 218,
    width: 43,
    height: 45,
    position: "absolute",
  },
  download91: {
    top: 333,
    left: 310,
    height: 52,
  },
  download101: {
    top: 444,
    left: 21,
    height: 54,
  },
  kategori: {
    backgroundColor: Color.colorPeachpuff,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
  },
});

export default Kategori;
