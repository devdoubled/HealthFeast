import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ComponentItem = () => {
  return (
    <View style={styles.component_item_container}>
      <View>
        <Image
          source={{
            uri: "https://cdn.tuoitre.vn/thumb_w/480/2021/1/14/gao-viet-11-16105914966141536270045.jpg",
          }}
          style={styles.compoenent_image}
        />
        <Text style={styles.compoent_name}>Gạo</Text>
      </View>
      <View>
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
  compoenent_image: {
    width: 80,
    height: 80,
    borderRadius: 12
  }
});
