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
      <View style={[styles.activity_container, { width: width - 60 }]}>
        <View style={styles.activity_detail}>
          <View style={styles.activity_img_container}>
            <Image source={image} style={styles.activity_img} />
          </View>
          <Text style={styles.activity_type}>{activityType}</Text>
          <Text style={styles.activity_text}>{description}</Text>
        </View>
        <View style={[styles.activity_picker_container, { width: width - 60 }]}>
          <View style={styles.activity_picker}>
            <Slider
              style={{ width: 230, height: 40 }}
              onValueChange={(value) => setActivity(value)}
              minimumValue={1}
              maximumValue={100}
              minimumTrackTintColor="#9ABF5A"
              maximumTrackTintColor="#E7F7CA"
            />
          </View>
        </View>
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={onNext} />
      </View>
    </View>
  );
};

export default DietScreen;

const styles = StyleSheet.create({});
