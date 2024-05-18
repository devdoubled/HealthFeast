import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ComponentItem = () => {
  return (
    <View style={styles.component_item_container}>
      <View style={styles.left}>
        <Image
          source={{
            uri: "https://cdn.tuoitre.vn/thumb_w/480/2021/1/14/gao-viet-11-16105914966141536270045.jpg",
          }}
          style={styles.compoenent_image}
        />
        <Text style={styles.compoent_name}>Gạo</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.number}>250</Text>
        <Text style={styles.unit}>gr</Text>
      </View>
    </View>
  );
};

export default ComponentItem;

const styles = StyleSheet.create({
  component_item_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  compoenent_image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 15,
  },
  compoent_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  number: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#B4B4B4",
  },
  unit: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#B4B4B4",
    marginLeft: 5,
  },
});
