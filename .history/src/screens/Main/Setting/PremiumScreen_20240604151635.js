import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";
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
        <View style={styles.package_item}>
          <View style={styles.package_header}>
            <Text style={styles.package_title}>Gói cơ bản</Text>
          </View>
          <View style={styles.package_price}>
            <Text style={styles.price}>149.000</Text>
            <Text style={styles.unit}>đ/Tháng</Text>
          </View>
        </View>
      </View>
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
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000"
  },
  premium_container: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  package_item: {
    width: "100%",
    height: 150,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
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
  package_price: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    width: 70,
    fontFamily: "Montserrat-Medium",
    fontSize: 1,
    color: "#000000",
    backgroundColor: "red"
  },
  unit: {
    marginLeft: 15,
  }
})