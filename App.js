import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes, Icons, Profiles } from "./assets/Themes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Footer } from "./app/components";
import { SafeAreaView } from "react-native-safe-area-context";

/* This is the home screen used for the navigation system, we'll
 * learn more about in the coming weeks!
 */
function HomeScreen() {
  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={Icons.menu.light} style={styles.topBarImage} />
        <Text style={{ fontFamily: "SydneyBold", fontSize: 32 }}>ensom</Text>
        <Image source={Icons.sun} style={styles.topBarImage} />
      </View>
      <View style={styles.mainBar}>
        <View style={styles.profile}>
          <ImageBackground
            source={Profiles.mtl.image}
            style={{ flex: 1 }}
            imageStyle={{ borderRadius: 10, resizeMode: "cover" }}
          ></ImageBackground>
        </View>

        <View style={styles.takePlayer}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Sydney",
                fontSize: 26,
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              My hottest take
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: "60%",
              width: "100%",
              flex: 2,
            }}
          >
            <Image
              source={Icons.player.light}
              style={{
                width: "16%",
                height: undefined,
                aspectRatio: 1,
                resizeMode: "contain",
                marginLeft: "3%",
                marginRight: "3%",
              }}
            />
            <Image
              source={Icons.audioWave.light}
              style={{
                height: "100%",
                width: "75%",
                resizeMode: "contain",
                marginRight: "3%",
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    SydneyBold: require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={Footer}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Themes.light.bg,
  },
  topBar: {
    backgroundColor: Themes.light.bg,
    height: Platform.OS === "ios" ? 41 : 54,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topBarImage: {
    // is there a way to do this without hardcoding the height?
    height: Platform.OS === "ios" ? 41 : 54,
    width: Platform.OS === "ios" ? 41 : 54,
    resizeMode: "contain",
  },
  mainBar: {
    height: "90%",
    backgroundColor: Themes.light.bg,
    padding: "5%",
    margin: "2.5%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 41 : 54,
    justifyContent: "top",
  },
  profile: {
    aspectRatio: 1 / 1.1,
    height: "60%",
    backgroundSize: "cover",
    width: undefined,
    backgroundColor: Themes.light.bgSecondary,
    // rounded corners
    borderRadius: 10,
    // drop shadow
    ...Themes.light.shadows,
  },
  takePlayer: {
    justifyContent: "space-around",
    borderRadius: 30,
    marginTop: "5%",
    height: "25%",
    aspectRatio: 60 / 25 / 1.1,
    backgroundColor: Themes.light.bgSecondary,
    ...Themes.light.shadows,
  },
});
