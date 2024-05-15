import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Logo from "../../../assets/images/logo.png";

const LoadingScreen = () => {
  // const fadeAnimation = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   Animated.timing(fadeAnimation, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [fadeAnimation]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    overflow: "hidden",
  },
  logo: {
    resizeMode: "cover",
  },
});
