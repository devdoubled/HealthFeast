import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeItem = () => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{calories}</Text>
      <Text style={styles.details}>{time}</Text>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({});
