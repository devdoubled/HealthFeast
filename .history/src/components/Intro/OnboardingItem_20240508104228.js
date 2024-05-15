import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.2 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {item.isOptions && (
        <View>
          <Pressable style={styles.newUser}>
            <Text>Tôi là người mới</Text>
          </Pressable>
          <Pressable>
            <Text>Tôi đã từng sử dụng</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 28,
    marginTop: 30,
    textAlign: "center",
    color: "#9ABF5A",
  },
  description: {
    width: 300,
    fontFamily: "Montserrat-Medium",
    fontWeight: "300",
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
    paddingTop: 8,
  },
});
