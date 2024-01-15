import * as React from "react";
import { Text, StyleSheet, View, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <Image
        style={styles.logoUiuxBangunan2}
        contentFit="cover"
        source={require("../assets/logo-uiux-bangunan-21.png")}
      />
      <View style={[styles.loginChild, styles.loginChildLayout]} />
      <View style={[styles.loginItem, styles.loginChildLayout]} />
      <View style={[styles.loginInner, styles.loginChildLayout]} />
      <View style={[styles.rectangleView, styles.loginChild5Layout]} />
      <Image
        style={styles.loginIcon}
        contentFit="cover"
        source={require("../assets/login.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.password, styles.orTypo]}>{`PASSWORD
`}</Text>
      <Text style={[styles.login1, styles.orTypo]}>LOGIN</Text>
      <Text style={[styles.enterYourEmail, styles.enterTypo]}>
        Enter your email address
      </Text>
      <Text style={[styles.enterYourPassword, styles.enterTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.dontContainerPosition]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an accout? `}</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.loginChild1, styles.lineViewLayout]} />
      <Image
        style={[styles.googlee1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/googlee-1.png")}
      />
      <Text style={[styles.loginWithGoogle, styles.enterTypo]}>
        Login with google
      </Text>
      <View style={[styles.loginChild2, styles.loginChildLayout]} />
      <Text style={[styles.loginWithPhone, styles.enterTypo]}>
        Login with phone
      </Text>
      <Image
        style={[styles.istockphoto1277359809170667aIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/istockphoto1277359809170667a-1.png")}
      />
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <View style={[styles.loginChild, styles.loginChildLayout]} />
      <View style={[styles.loginItem, styles.loginChildLayout]} />
      <Pressable
        style={[styles.loginInner, styles.loginChildLayout]}
        onPress={() =>
          Linking.openURL("https://accounts.google.com/login?hl=in")
        }
      />
      <Pressable
        style={[styles.loginChild5, styles.loginChild5Layout]}
        onPress={() => navigation.navigate("Beranda1")}
      />
      <Image
        style={styles.loginIcon}
        contentFit="cover"
        source={require("../assets/login.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.password, styles.orTypo]}>{`PASSWORD
`}</Text>
      <Text style={[styles.enterYourEmail, styles.enterTypo]}>
        Enter your email address
      </Text>
      <View style={[styles.loginChild, styles.loginChildLayout]} />
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.enterYourEmail, styles.enterTypo]}>
        Enter your email address
      </Text>
      <Text style={[styles.enterYourPassword, styles.enterTypo]}>
        Enter your password
      </Text>
      <Text style={[styles.forgetPassword, styles.emailTypo]}>
        forget password?
      </Text>
      <Pressable
        style={styles.dontContainerPosition}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.text, styles.orTypo]}>
          <Text style={styles.dontHaveAn}>{`Don’t have an accout? `}</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </Pressable>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.loginChild1, styles.lineViewLayout]} />
      <Image
        style={[styles.googlee1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/googlee-1.png")}
      />
      <Text style={[styles.loginWithGoogle, styles.enterTypo]}>
        Login with google
      </Text>
      <View style={[styles.loginChild2, styles.loginChildLayout]} />
      <Text style={[styles.loginWithPhone, styles.enterTypo]}>
        Login with phone
      </Text>
      <Image
        style={[styles.istockphoto1277359809170667aIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/istockphoto1277359809170667a-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
  },
  loginChildLayout: {
    height: 56,
    width: 315,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    left: 37,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderStyle: "solid",
  },
  loginChild5Layout: {
    top: 485,
    height: 56,
    width: 315,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    left: 37,
    position: "absolute",
    borderStyle: "solid",
  },
  emailTypo: {
    left: 38,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  enterTypo: {
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  dontContainerPosition: {
    top: 554,
    left: 38,
    position: "absolute",
  },
  lineViewLayout: {
    height: 2,
    width: 146,
    borderTopWidth: 2,
    top: 612,
    position: "absolute",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 33,
    width: 33,
    left: 47,
    position: "absolute",
  },
  or: {
    top: 599,
    left: 183,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  logoUiuxBangunan2: {
    top: 50,
    left: 123,
    borderRadius: Border.br_89xl,
    width: 143,
    height: 143,
    position: "absolute",
  },
  loginChild: {
    top: 283,
  },
  loginItem: {
    top: 379,
  },
  loginInner: {
    top: 643,
  },
  rectangleView: {
    top: 485,
    backgroundColor: Color.colorPeachpuff,
  },
  loginIcon: {
    marginLeft: -25,
    top: 506,
    left: "50%",
    width: 51,
    height: 19,
    position: "absolute",
  },
  email: {
    top: 260,
    color: Color.colorBlack,
  },
  password: {
    top: 354,
    left: 22,
    width: 153,
    height: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.aldrich,
    position: "absolute",
  },
  login1: {
    top: 212,
    left: 146,
    fontSize: 30,
    color: Color.colorBlack,
    position: "absolute",
  },
  enterYourEmail: {
    top: 301,
    left: 56,
    color: Color.colorGray_300,
  },
  enterYourPassword: {
    top: 397,
    left: 56,
    color: Color.colorGray_300,
  },
  dontHaveAn: {
    color: Color.colorDimgray_200,
  },
  signUp: {
    color: Color.colorPeachpuff,
  },
  dontHaveAnContainer: {
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
  },
  lineView: {
    left: 30,
  },
  loginChild1: {
    left: 214,
  },
  googlee1Icon: {
    top: 655,
  },
  loginWithGoogle: {
    top: 661,
    left: 85,
  },
  loginChild2: {
    top: 712,
  },
  loginWithPhone: {
    top: 730,
    left: 87,
  },
  istockphoto1277359809170667aIcon: {
    top: 724,
  },
  loginChild5: {
    backgroundColor: Color.colorWhite,
    top: 485,
  },
  forgetPassword: {
    top: 451,
    color: Color.colorDimgray_200,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.aldrich,
  },
  login: {
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

export default Login;
