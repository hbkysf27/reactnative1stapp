// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  let x = 1;
  console.log("App Executed");
  const handlePress = () => console.log("text Clicked");
  const imagetap = () => console.log("image Clicked");
  const buttonclick = () => console.log("button Clicked");
  const containerStyle = { backgroundColor: "orange" };
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <TouchableNativeFeedback onPress={imagetap}>
        {/* <Image
          blurRadius={3}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>

      {/* <image
        source={{
          width: 200,
          height: 300,

          uri: "https://picsum.photos/200/300",
        }}
      /> */}

      <Button
        color="orange"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
        title="Click Me"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
