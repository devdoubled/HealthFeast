import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PurposeImg from "../../../assets/images/activity_less.png";
import UserAvt from "../../../assets/images/user_default.png";
import { AuthContext } from "../../../context/AuthContext";
import settingOptions from "../../../data/settingOptions";
import * as Updates from 'expo-updates';

const SettingScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const width = Dimensions.get("window").width;

  const handlePressOption = async (title) => {
    const screenMapping = {
        "Gói Premium": "PremiumScreen",
        "Hồ sơ": "ProfileScreen",
        "Lịch sử": "HistoryScreen",
        "Thông báo": "NotifyScreen",
        "Cài đặt": "OptionScreen",
        "Trung tâm bảo mật": "SecurityScreen",
        "Giúp": "HelpScreen",
        "Về chúng tôi": "AboutScreen"
    };

    const screen = screenMapping[title];
    
    if (screen) {
        navigation.navigate(screen);
    } else {
      await logout();
    }
};
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.more_header, { width: width - 32 }]}>
        <View style={styles.streak}>
          <Text style={styles.streak_title}>Tích lũy</Text>
          <Text style={styles.streak_count}>1</Text>
          <Text style={styles.streak_desc}>Ngày</Text>
        </View>
        <View style={styles.user}>
          <Image source={UserAvt} style={styles.user_avt} />
          <Text style={styles.user_name}>Dev DoubleD</Text>
        </View>
        <View style={styles.progress}>
          <Text style={styles.progress_title}>Quá trình</Text>
          <Text style={styles.progress_count}>10</Text>
          <Text style={styles.progress_desc}>Giảm/ Kgs</Text>
        </View>
      </View>
      <View style={[styles.more_purpose, { width: width - 32 }]}>
        <Image source={PurposeImg} style={styles.purpose_img} />
        <View style={styles.purpose_info}>
          <Text style={styles.purpose_title}>Nhớ cập nhật BMI nhoé</Text>
          <Text style={styles.purpose_desc}>
            Cập nhật thường xuyên để có chỉ số chính xác.
          </Text>
        </View>
      </View>
      <View style={[styles.more_options_container, { width: width - 32 }]}>
        {settingOptions.map((option) => (
          <Pressable
            style={({ pressed }) => [styles.option_container, pressed && styles.pressed]}
            key={option.id}
            onPress={() => handlePressOption(option.title)}
          >
            <View style={styles.option_content}>
              <View style={styles.option_img_container}>
                {option.iconType === "component" ? (
                  option.icon
                ) : (
                  <Image source={option.icon} />
                )}
              </View>
              <Text style={styles.option_text}>{option.title}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  more_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 15,
  },
  streak: {
    width: 90,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  streak_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  streak_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  streak_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
  },
  user: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user_avt: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
  user_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
    paddingTop: 5,
  },
  progress: {
    width: 90,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progress_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  progress_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  progress_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
  },
  more_purpose: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 25,
  },
  purpose_img: {
    marginRight: 12,
    width: 50,
    height: 50,
  },
  purpose_info: {
    flexDirection: "column",
  },
  purpose_title: {
    fontFamily: "Montserrat-Italic",
    fontSize: 24,
    color: "#000000",
  },
  purpose_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    paddingTop: 2,
  },
  more_options_container: {
    marginHorizontal: 16,
    marginTop: 25,
  },
  option_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 12,
    borderColor: "#9ABF5A",
  },
  option_content: {
    flexDirection: "row",
    alignItems: "center",
  },
  option_img_container: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E2E2E",
  },
  option_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  pressed: {
    backgroundColor: "rgba(154, 191, 90, 0.2)"
  }
});
