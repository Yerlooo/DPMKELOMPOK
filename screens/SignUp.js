import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <Image
        style={styles.logoUiuxBangunan2}
        contentFit="cover"
        source={require("../assets/logo-uiux-bangunan-21.png")}
      />
      <View style={[styles.signupChild, styles.signupChildBorder]} />
      <View style={[styles.signupItem, styles.signupChildBorder]} />
      <View style={[styles.signupInner, styles.signupChildBorder]} />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.enterYourEmail, styles.enterTypo]}>
        Enter your email address
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.signupChildBorder]}
        onPress={() => navigation.navigate("Login")}
      />
      <Image
        style={styles.logoUiuxBangunan2}
        contentFit="cover"
        source={require("../assets/logo-uiux-bangunan-21.png")}
      />
      <View style={[styles.rectangleView, styles.signupChildBorder]} />
      <Text style={[styles.fullName, styles.textTypo]}>Full Name</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Image
        style={styles.signUpIcon}
        contentFit="cover"
        source={require("../assets/sign-up.png")}
      />
      <Text style={[styles.enterYourName, styles.enterTypo]}>
        Enter your name
      </Text>
      <Text style={[styles.enterYourPassword, styles.enterTypo]}>
        Enter your password
      </Text>
      <View style={[styles.signupChild1, styles.signupChildBorder]} />
      <Text style={[styles.phone, styles.emailTypo]}>PHONE</Text>
      <Text style={[styles.enterYourPhone, styles.enterTypo]}>
        Enter your phone
      </Text>
      <Pressable
        style={styles.alreadyHaveAContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.alreadyHaveA}>{`Already have a accout? `}</Text>
          <Text style={styles.login}>Login</Text>
        </Text>
      </Pressable>
      <Text style={[styles.create, styles.textTypo]}>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signupChildBorder: {
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    position: "absolute",
    borderStyle: "solid",
  },
  emailTypo: {
    height: 24,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  enterTypo: {
    color: Color.colorGray_300,
    left: 56,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
  },
  logoUiuxBangunan2: {
    top: 21,
    left: 123,
    borderRadius: Border.br_89xl,
    width: 143,
    height: 143,
    position: "absolute",
  },
  signupChild: {
    top: 283,
    width: 315,
    left: 37,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  signupItem: {
    top: 372,
    width: 315,
    left: 37,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  signupInner: {
    top: 485,
    width: 315,
    left: 37,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPeachpuff,
  },
  email: {
    top: 352,
    left: -8,
    width: 153,
    height: 24,
  },
  enterYourEmail: {
    top: 389,
  },
  rectanglePressable: {
    top: 627,
    left: 116,
    width: 157,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 465,
    width: 315,
    left: 37,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  fullName: {
    top: 265,
    left: 42,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  password: {
    top: 446,
    left: 15,
    width: 153,
    height: 24,
  },
  signUpIcon: {
    marginLeft: -62,
    top: 206,
    left: "50%",
    width: 126,
    height: 21,
    position: "absolute",
  },
  enterYourName: {
    top: 301,
  },
  enterYourPassword: {
    top: 483,
  },
  signupChild1: {
    top: 553,
    width: 315,
    left: 37,
    height: 56,
    borderWidth: 5,
    borderColor: Color.colorPeachpuff,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  phone: {
    top: 533,
    left: 27,
    width: 92,
  },
  enterYourPhone: {
    top: 575,
  },
  alreadyHaveA: {
    color: Color.colorDimgray_200,
  },
  login: {
    color: Color.colorPeachpuff,
  },
  text: {
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
  },
  alreadyHaveAContainer: {
    left: 73,
    top: 688,
    position: "absolute",
  },
  create: {
    top: 645,
    left: 151,
    width: 93,
    height: 28,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.aldrich,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signup: {
    borderColor: Color.colorBlack,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderStyle: "solid",
    backgroundColor: Color.colorPeachpuff,
  },
});

export default SignUp;
