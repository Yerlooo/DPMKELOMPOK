import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keranjang4 = () => {
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
      <Pressable
        style={[styles.pressable, styles.pngwing5Position]}
        onPress={() => navigation.navigate("Beranda1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/25694-2.png")}
        />
      </Pressable>
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
      <Text style={styles.akun}>Akun</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.transaksi, styles.homeTypo]}>Transaksi</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Beranda1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/rectangle-80.png")}
        />
      </Pressable>
      <Text style={[styles.notifikasi, styles.notifikasiLayout]}>
        notifikasi
      </Text>
      <Text style={[styles.notifikasiKosong, styles.notifikasiLayout]}>
        notifikasi kosong
      </Text>
      <Text style={[styles.mohonMaafNotifikasi, styles.notifikasiLayout]}>
        mohon maaf notifikasi tidak ditemukan
      </Text>
      <Image
        style={styles.pngtreeConfusedPeopleFlatVIcon}
        contentFit="cover"
        source={require("../assets/pngtreeconfusedpeopleflatvectorpngpngimage-3415076-1.png")}
      />
      <Pressable
        style={styles.pngwing6}
        onPress={() => navigation.navigate("Keranjang5")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pngwing-9.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pngwing5Position: {
    top: 732,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  keranjangChildLayout: {
    height: 85,
    width: 100,
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
  notifikasiLayout: {
    height: 11,
    width: 258,
    left: 66,
    textAlign: "center",
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
    borderRadius: Border.br_90xl_5,
  },
  pressable: {
    left: 18,
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
  pngwing5: {
    left: 285,
    width: 73,
    height: 74,
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
    left: 26,
    top: 59,
    width: 22,
    height: 16,
    position: "absolute",
  },
  notifikasi: {
    top: 56,
    fontSize: FontSize.size_lg,
    height: 11,
    width: 258,
    left: 66,
    color: Color.colorBlack,
  },
  notifikasiKosong: {
    top: 389,
    fontSize: FontSize.size_lg,
    height: 11,
    width: 258,
    left: 66,
    color: Color.colorBlack,
  },
  mohonMaafNotifikasi: {
    top: 412,
    color: "#767272",
    height: 11,
    width: 258,
    left: 66,
    fontSize: FontSize.size_xs,
  },
  pngtreeConfusedPeopleFlatVIcon: {
    top: 158,
    left: 105,
    borderRadius: 90,
    width: 180,
    height: 197,
    position: "absolute",
  },
  icon3: {
    borderRadius: Border.br_xl,
  },
  pngwing6: {
    left: 146,
    top: 731,
    width: 85,
    height: 78,
    position: "absolute",
  },
  keranjang: {
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

export default Keranjang4;
