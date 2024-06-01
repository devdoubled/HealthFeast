import { BlurView } from "expo-blur";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecipeIconText from "../../../assets/images/activity_medium.png";
import NavbarList from "../../../components/Main/Community/NavbarList";
import { expertData } from "../../../data/expertData";
const CommunityExpertScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View style={[styles.title_container, { width: width - 32 }]}>
        <Image source={RecipeIconText} style={styles.title_img} />
        <View style={styles.text_container}>
          <Text style={styles.highlight_text}>Chuyên gia là cho bạn</Text>
          <Text style={styles.normal_text}>
            Các chuyên gia sẽ giúp bạn tốt hơn.
          </Text>
        </View>
      </View>
      <ScrollView
        style={[styles.expert_container, { width: width - 32 }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {expertData.map((data) => (
          <ImageBackground
            source={data.image}
            style={styles.expert_img}
            imageStyle={styles.imageBackground}
            key={data.id}
          >
            <View style={styles.expert_name_container}>
              <BlurView intensity={50} style={styles.absolute} />
              <View style={styles.expert_name}>
                <Text style={styles.expert_name_role}>Chuyên gia</Text>
                <Text style={styles.expert_name_text}>{data.name}</Text>
                <View style={styles.expert_info}>
                  <Text style={styles.position}>{data.position}</Text>
                  <Text style={styles.gender}>{data.gender}</Text>
                  <Text style={styles.age}>{data.age} Tuổi</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

export default CommunityExpertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  title_img: {
    marginRight: 10,
  },
  text_container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  highlight_text: {
    fontFamily: "Montserrat-Italic",
    fontSize: 24,
    paddingBottom: 3,
    color: "#000000",
  },
  normal_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  expert_container: {
    marginHorizontal: 16,
  },
  expert_img: {
    width: "100%",
    height: 450,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  imageBackground: {
    borderRadius: 15,
    resizeMode: "cover",
  },
  expert_name_container: {
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  expert_name: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  expert_name_role: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
  expert_name_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
    paddingVertical: 5,
  },
  expert_info: {
    flexDirection: "row",
    alignItems: "center",
  },
  position: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
  },
  gender: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
    paddingHorizontal: 20,
  },
  age: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFFFFF",
  },
});
