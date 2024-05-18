import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ComponentItem = () => {
  return (
    <View style={styles.component_item_container}>
      <Image
        source={{
          uri: "https://cdn.tuoitre.vn/thumb_w/480/2021/1/14/gao-viet-11-16105914966141536270045.jpg",
        }}
        style={styles.compoent_image}
      />
      <Text style={styles.compoent_name}>Gạo</Text>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default ComponentItem;

const styles = StyleSheet.create({});
