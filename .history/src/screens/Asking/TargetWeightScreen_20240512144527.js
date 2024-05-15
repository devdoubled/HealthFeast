import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const TargetWeightScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Cân nặng của bạn?</Text>
      <Text style={styles.sub_text}>
        Dùng cân nặng hiện tại như một điểm khởi đầu giúp chúng tôi tạo kế hoạch
        cá nhân hóa cho bạn dễ dàng hơn
      </Text>
      <View style={[styles.action_container, { width: width - 70 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext}/>
      </View>
    </View>
  );
};

export default TargetWeightScreen;

const styles = StyleSheet.create({});
