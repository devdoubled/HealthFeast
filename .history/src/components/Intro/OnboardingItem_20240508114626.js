import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const OnboardingItem = ({ item, onComplete }) => {
  const { width } = useWindowDimensions();

  const handlePressNewUser = () => {
    onComplete
    console.log("New user pressed");
  };

  const handlePressExistUser = () => {
    console.log("Existing user pressed");
  };
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.2 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.isOptions ? `"${item.description}"` : item.description}</Text>
      </View>
      {item.isOptions && (
        <View style={styles.button_container}>
          <Pressable
            onPress={handlePressNewUser}
            style={({ pressed }) => [styles.newUser, pressed && styles.pressed]}
          >
            <Text style={styles.newUser_text}>Tôi là người mới</Text>
          </Pressable>
          <Pressable
            onPress={handlePressExistUser}
            style={({ pressed }) => [
              styles.usedUser,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.usedUser_text}>Tôi đã từng sử dụng</Text>
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
  button_container: {
    flexDirection: "column",
    marginTop: 10,
  },
  newUser: {
    width: 350,
    height: 44,
    backgroundColor: "#9ABF5A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  newUser_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#ffffff",
  },
  usedUser: {
    width: 350,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  usedUser_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#000000",
  },
  pressed: {
    opacity: 0.7,
  },
});
