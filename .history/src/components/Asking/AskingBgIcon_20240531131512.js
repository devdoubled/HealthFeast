import { StyleSheet, View, Image } from "react-native";
import React from "react";
import askingIcon1 from "../../assets/images/asking_icon_1.png";
import askingIcon2 from "../../assets/images/asking_icon_2.png";
import askingIcon3 from "../../assets/images/asking_icon_3.png";
import askingIcon4 from "../../assets/images/asking_icon_4.png";
import askingIcon5 from "../../assets/images/asking_icon_5.png";
const AskingBgIcon = () => {
  return (
    <View style={styles.asking_icon}>
      <Image source={askingIcon1} style={styles.icon_1} />
      <Image source={askingIcon2} style={styles.icon_2} />
      <Image source={askingIcon3} style={styles.icon_3} />
      <Image source={askingIcon4} style={styles.icon_4} />
      <Image source={askingIcon5} style={styles.icon_5} />
    </View>
  );
};

export default AskingBgIcon;

const styles = StyleSheet.create({
  asking_icon: {
    position: "relative",
    width: "100%",
  },
  icon_1: {
    position: "absolute",
    top: 0,
    left: 40,
  },
  icon_2: {
    position: "absolute",
    top: 30,
    right: 40,
  },
  icon_3: {
    position: "absolute",
    right: 60,
    top: 280,
  },
  icon_4: {
    position: "absolute",
    left: 40,
    top: 330,
  },
  icon_5: {
    position: "absolute",
    right: 65,
    top: 430,
  },
});
