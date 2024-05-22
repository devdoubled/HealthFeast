import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DietScreen = () => {
    const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Bạn hoạt động như thế nào?</Text>
      <Text style={styles.sub_text}>
        Mức độ hoạt động của bạn, chúng tôi muốn tạo kế hoạch cá nhân hóa cho
        bạn dựa trên mức độ hoạt động của bạn
      </Text>
      
    </View>
  );
};

export default DietScreen;

const styles = StyleSheet.create({});
