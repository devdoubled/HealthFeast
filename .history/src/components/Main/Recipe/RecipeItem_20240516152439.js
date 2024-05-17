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

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      },
      image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
      },
      details: {
        fontSize: 14,
        color: "#666",
      },
});
