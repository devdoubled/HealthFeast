import React from 'react';
import { Dimensions, Platform, StyleSheet, View, ImageBackground } from 'react-native';

const ExerciseDetailScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.exercise_detail_container, { width: width - 32 }]}>
      <ImageBackground
          source={{
            uri: "https://cdn.tgdd.vn/Files/2021/08/20/1376632/cach-lam-salad-trung-ca-hoi-thom-ngon-doc-dao-bo-duong-cho-ca-nha-202201041547339044.jpg",
          }}
          style={styles.exercise_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.exercise_name}>Salad trộn</Text>
        </ImageBackground>
      </View>
    </View>
  )
}

export default ExerciseDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  exercise_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
  }
})