import React from 'react';
import { Dimensions, ImageBackground, Platform, StyleSheet, View } from 'react-native';

const ExerciseDetailScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.exercise_detail_container, { width: width - 32 }]}>
      <ImageBackground
          source={{
            uri: "https://www.thuocdantoc.org/wp-content/uploads/2021/07/tac-dung-cua-chay-bo-2.jpg",
          }}
          style={styles.exercise_img}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.exercise_name}>Chạy bộ</Text>
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
  },
  exercise_img: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  imageBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  exercise_name: {
    position: "absolute",
    bottom: 40,
    left: 20,
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    color: "#FFFFFF",
  },
})