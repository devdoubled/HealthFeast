import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";
import premiumPackages from "../../../data/premiumPackages";
import { AntDesign } from '@expo/vector-icons';

const PremiumScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo_img} />
      </View>
      <View style={[styles.premium_info, { width: width - 32 }]}>
        <Text style={styles.title}>“Giữ gìn sức khỏe, sống cuộc sống của bạn”</Text>
        <Text style={styles.desc}>Các thành viên có khả năng đạt được thành quả và mục tiêu có tỉ lệ cao hơn tới <Text style={styles.highlight}>60%</Text> so với trước.</Text>
        <View style={styles.func_list}>
          <View style={styles.func}>
            <MaterialCommunityIcons name="star-plus-outline" size={32} color="#F5CF46" />
            <Text style={styles.func_text}>Tính năng quét món ăn Việt Nam và xác định lượng calo.</Text>
          </View>
          <View style={styles.func}>
            <MaterialCommunityIcons name="star-plus-outline" size={32} color="#F5CF46" />
            <Text style={styles.func_text}>Tính năng gợi ý thực đơn hàng ngày, hàng tuần.</Text>
          </View>
          <View style={styles.func}>
            <MaterialCommunityIcons name="star-plus-outline" size={32} color="#F5CF46" />
            <Text style={styles.func_text}>Nhiều tính năng hiệu quả khác.</Text>
          </View>
        </View>
      </View>
      <View style={styles.premium_select}>
        <Text style={styles.select_text}>Chọn kế hoạch cho lần dùng thử của bạn</Text>
      </View>
      <View style={[styles.premium_container, { width: width - 32 }]}>
        {premiumPackages.map((item) => (
          <View style={styles.package_item} key={item.id}>
            <View style={styles.package_header}>
              <Text style={styles.package_title}>{item.package_title}</Text>
              <View style={styles.package_select}>
                <AntDesign name="checkcircle" size={12} color="#9ABF5A" />
              </View>
            </View>
            <View style={styles.package_price}>
              <Text style={styles.price}>{item.package_price}</Text>
              <Text style={styles.unit}>đ/Tháng</Text>
            </View>
            <View style={styles.package_feature}>
              <Text style={styles.feature_text}>Chức năng:</Text>
              <View style={styles.feature_content}>
                {item.package_features.map((feature, index) => (
                  <View style={styles.feature_func} key={index}>
                    <Text>{'\u2022'}</Text>
                    <Text style={styles.feature_func_text}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
      <Pressable style={({ pressed }) => [styles.continue_btn, pressed && styles.pressed, { width: width - 32 }]}>
        <Text style={styles.continue_text}>Tiếp tục</Text>
      </Pressable>
    </ScrollView>
  )
}

export default PremiumScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  logo_img: {
    width: 100,
    height: 100
  },
  premium_info: {
    marginHorizontal: 16
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    color: "#000000",
  },
  desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    lineHeight: 20,
    marginTop: 8,
  },
  highlight: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#000000",
  },
  func_list: {
    marginTop: 20,
  },
  func: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  func_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    marginLeft: 10
  },
  premium_select: {
    alignItems: "center",
    justifyContent: "center",
  },
  select_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#000000"
  },
  premium_container: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  package_item: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: "#9ABF5A"
  },
  package_header: {
    flexDirection: "row",
    aligmItems: "center",
    justifyContent: "space-between",
  },
  package_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#9ABF5A"
  },
  package_select: {
    width: 30,
    height: 30,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: "#B4B4B4",
  },
  package_price: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    width: 70,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#000000",
  },
  unit: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#000000",
    marginLeft: 15,
  },
  package_feature: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
  },
  feature_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#000000",
  },
  feature_content: {
    marginLeft: 15
  },
  feature_func: {
    flexDirection: "row",
    marginBottom: 5
  },
  feature_func_text: {
    width: 250,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#000000",
  },
  continue_btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginHorizontal: 16,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: "#464646"
  },
  continue_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#9ABF5A",
  },
  pressed: {
    opacity: 0.9
  }
})