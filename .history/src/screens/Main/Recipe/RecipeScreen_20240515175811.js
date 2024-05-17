import React from "react";
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.tabContainer}>
        <TouchableOpacity >
          <Text style={styles.tabText}>Công thức</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.tabText}>Kế hoạch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GoiY')}>
          <Text style={styles.tabText}>Gợi ý</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
