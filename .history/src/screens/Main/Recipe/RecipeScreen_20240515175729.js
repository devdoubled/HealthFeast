import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CongThuc')}>
          <Text style={styles.tabText}>Công thức</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('KeHoach')}>
          <Text style={styles.tabText}>Kế hoạch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GoiY')}>
          <Text style={styles.tabText}>Gợi ý</Text>
        </TouchableOpacity>
        {/* Add more tabs as needed */}
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
