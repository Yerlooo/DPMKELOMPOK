import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keranjang5 = () => {
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
      <View style={styles.keranjangInner} />
      <Pressable
        style={[styles.pngClipartShoppingCartComp, styles.download1IconLayout]}
        onPress={() => navigation.navigate("Keranjang4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
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
        style={[styles.download1Icon, styles.download1IconLayout]}
        contentFit="cover"
        source={require("../assets/download-2.png")}
      />
      <Image
        style={styles.ellipseIcon}
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
        style={[styles.keranjangChild1, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.keranjangChild2, styles.keranjangChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.keranjangChild3, styles.pngwing6Icon1Position]}
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
      <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.keranjangChild4, styles.rectangleViewLayout]} />
      <View style={[styles.keranjangChild4, styles.rectangleViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.keranjangChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-67.png")}
      />
      <Image
        style={[styles.keranjangChild6, styles.keranjangChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <Text style={[styles.pekanbaru, styles.pekanbaruPosition]}>
        Pekanbaru
      </Text>
      <Text style={[styles.dikirimKe, styles.pekanbaruPosition]}>
        Dikirim ke
      </Text>
      <Text style={[styles.transaksi1, styles.transaksi1Layout]}>
        Transaksi
      </Text>
      <Image
        style={[styles.pngegg1Icon, styles.transaksi1Layout]}
        contentFit="cover"
        source={require("../assets/pngegg-1.png")}
      />
      <View style={[styles.keranjangChild7, styles.keranjangChildPosition]} />
      <Text style={[styles.gudang, styles.gudangTypo]}>Gudang</Text>
      <Image
        style={styles.pngwing6Icon}
        contentFit="cover"
        source={require("../assets/pngwing-6.png")}
      />
      <Text style={[styles.november2023, styles.keranjangChildPosition]}>
        27 November 2023
      </Text>
      <Image
        style={[styles.icon3, styles.icon3Position]}
        contentFit="cover"
        source={require("../assets/8-1.png")}
      />
      <Text style={[styles.rucikaFittingPipa, styles.icon3Position]}>
        rucika fitting pipa standard JIS k -6743 ..
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.keranjangChild8, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-14.png")}
      />
      <Image
        style={[styles.pngwing6Icon1, styles.pngwing6Icon1Position]}
        contentFit="cover"
        source={require("../assets/pngwing-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  download1IconLayout: {
    height: 29,
    width: 29,
    top: 42,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pngwing5Position: {
    top: 732,
    position: "absolute",
  },
  keranjangChildLayout: {
    height: 85,
    width: 100,
  },
  pngwing6Icon1Position: {
    left: 145,
    position: "absolute",
  },
  akunTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
  },
  homeTypo: {
    top: 809,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 48,
    width: 405,
    backgroundColor: Color.colorSnow,
    position: "absolute",
  },
  keranjangChildPosition: {
    left: 10,
    position: "absolute",
  },
  pekanbaruPosition: {
    left: 39,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  transaksi1Layout: {
    height: 31,
    position: "absolute",
  },
  gudangTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
  },
  icon3Position: {
    top: 240,
    position: "absolute",
  },
  lineIconLayout: {
    height: 4,
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
    top: 37,
    left: 42,
    borderRadius: Border.br_mini,
    borderColor: Color.colorPeachpuff,
    borderWidth: 5,
    width: 250,
    height: 40,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderStyle: "solid",
  },
  icon: {
    borderRadius: Border.br_90xl,
  },
  pngClipartShoppingCartComp: {
    left: 303,
  },
  pngtreeSearchIconImage1344: {
    top: 48,
    left: 54,
    borderRadius: Border.br_46xl_5,
    height: 19,
    width: 19,
    position: "absolute",
  },
  download1Icon: {
    left: 343,
    borderRadius: Border.br_38xl,
  },
  ellipseIcon: {
    left: 6,
    height: 100,
    width: 100,
    top: 721,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_90xl_5,
  },
  pressable: {
    left: 18,
    width: 76,
    height: 75,
  },
  keranjangChild1: {
    top: 714,
    left: 139,
    position: "absolute",
  },
  keranjangChild2: {
    left: 272,
    top: 721,
    height: 85,
    position: "absolute",
  },
  keranjangChild3: {
    top: 1785,
    display: "none",
    height: 85,
    width: 100,
  },
  pngwing5: {
    left: 285,
    width: 73,
    height: 74,
  },
  akun: {
    top: 812,
    left: 307,
    position: "absolute",
  },
  home: {
    left: 38,
  },
  transaksi: {
    left: 161,
  },
  rectangleView: {
    top: 82,
    left: -15,
  },
  keranjangChild4: {
    top: 135,
    left: 0,
  },
  rectangleIcon: {
    top: 97,
    width: 25,
    height: 25,
  },
  keranjangChild6: {
    top: 144,
    height: 21,
    width: 19,
  },
  pekanbaru: {
    top: 148,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.chathura,
  },
  dikirimKe: {
    top: 140,
    fontFamily: FontFamily.baloo,
    fontSize: FontSize.size_xs,
  },
  transaksi1: {
    top: 105,
    left: 16,
    width: 102,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
  },
  pngegg1Icon: {
    top: 91,
    left: 332,
    width: 32,
  },
  keranjangChild7: {
    top: 223,
    width: 369,
    height: 114,
    opacity: 0.4,
    backgroundColor: Color.colorWhite,
  },
  gudang: {
    top: 256,
    left: 143,
    fontSize: FontSize.size_6xs,
    position: "absolute",
  },
  pngwing6Icon: {
    top: 252,
    width: 14,
    height: 15,
    left: 124,
    position: "absolute",
  },
  november2023: {
    top: 202,
    width: 122,
    height: 9,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
  },
  icon3: {
    left: 28,
    width: 78,
    height: 50,
  },
  rucikaFittingPipa: {
    left: 124,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xs,
  },
  lineIcon: {
    top: 158,
    left: 77,
    width: 6,
  },
  keranjangChild8: {
    top: 162,
    left: 78,
    width: 5,
  },
  pngwing6Icon1: {
    top: 725,
    borderRadius: Border.br_xl,
    width: 85,
    height: 78,
  },
  keranjang: {
    backgroundColor: Color.colorPeachpuff,
    borderColor: Color.colorBlack,
    borderWidth: 2,
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
  },
});

export default Keranjang5;
