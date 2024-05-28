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
        howsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
          source={{
            uri: "https://nutrihome.vn/wp-content/uploads/2022/03/tran-thi-hong-loan-02.jpg",
          }}
          style={styles.expert_img}
          imageStyle={styles.imageBackground}
        >
          <View style={styles.expert_name_container}>
            <BlurView intensity={50} style={styles.absolute} />
            <View style={styles.expert_name}>
              <Text style={styles.expert_name_role}>Chuyên gia</Text>
              <Text style={styles.expert_name_text}>Trần Thị Hồng Loan</Text>
              <View style={styles.expert_info}>
                <Text style={styles.position}>Bác sĩ Dinh dưỡng</Text>
                <Text style={styles.gender}>Nữ</Text>
                <Text style={styles.age}>57 Tuổi</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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
    alignItems: "center"
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
    paddingHorizontal: 20
  },
  age: {
    
  }
});
