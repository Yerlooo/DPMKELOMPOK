const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HalamanLogin from "./screens/HalamanLogin";
import Frame from "./components/Frame";
import TampilanDalamKategori from "./screens/TampilanDalamKategori";
import Kategori from "./screens/Kategori";
import Pencaharian from "./screens/Pencaharian";
import Profile from "./screens/Profile";
import TentangAkun from "./screens/TentangAkun";
import Pengiriman from "./screens/Pengiriman";
import Keranjang from "./screens/Keranjang";
import Keranjang1 from "./screens/Keranjang1";
import Keranjang2 from "./screens/Keranjang2";
import Keranjang3 from "./screens/Keranjang3";
import Keranjang4 from "./screens/Keranjang4";
import Keranjang5 from "./screens/Keranjang5";
import Beranda from "./screens/Beranda";
import Beranda1 from "./screens/Beranda1";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HalamanLogin"
              component={HalamanLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TampilanDalamKategori"
              component={TampilanDalamKategori}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kategori"
              component={Kategori}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pencaharian"
              component={Pencaharian}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TentangAkun"
              component={TentangAkun}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pengiriman"
              component={Pengiriman}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang1"
              component={Keranjang1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang2"
              component={Keranjang2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang3"
              component={Keranjang3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang4"
              component={Keranjang4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang5"
              component={Keranjang5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beranda"
              component={Beranda}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beranda1"
              component={Beranda1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
