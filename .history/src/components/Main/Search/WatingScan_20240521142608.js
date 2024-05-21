import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, StyleSheet, View } from "react-native";

const WatingScan = ({ image }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };
    animate();
  }, [animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 400],
  });
  return (
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            <Animated.View
              style={[
                styles.scanLineContainer,
                { transform: [{ translateY }] },
              ]}
            >
              <LinearGradient
                colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0)"]}
                style={styles.scanLineContainer}
              >
                <View style={styles.scanLine} />
              </LinearGradient>
            </Animated.View>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
        </View>
      </ImageBackground>
  );
};

export default WatingScan;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 350,
    height: 400,
    position: "relative",
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  scanLineContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    alignItems: "center",
    height: "100%",
  },
  scanLine: {
    height: 3,
    width: "99%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  corner: {
    position: "absolute",
    width: 55,
    height: 55,
    borderColor: "#FFFFFF",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    // borderTopLeftRadius: 20,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
    // borderTopRightRadius: 20,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    // borderBottomLeftRadius: 20,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    // borderBottomRightRadius: 20,
  },
});
