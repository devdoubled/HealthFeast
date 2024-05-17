import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollView]}
      >
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <Text style={styles.tabText}>Công thức</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Kế hoạch</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
  scrollView: {
    backgroundColor: '#ccc', // Background color for the scroll view
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, // Padding for better touch area
  },
  tabText: {
    fontSize: 16,
    marginHorizontal: 20, // Space between tabs
  }
});