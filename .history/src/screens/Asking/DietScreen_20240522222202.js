import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ActivityExtreme from "../../assets/images/activity_extreme.png";
import ActivityLess from "../../assets/images/activity_less.png";
import ActivityNormal from "../../assets/images/activity_normal.png";
import CustomButton from "../../components/Auth/CustomButton";

const DietScreen = ({ onNext }) => {
  const { width } = useWindowDimensions();
  const [diet, setDiet] = useState(1);

  const getDietDetails = (value) => {
    let dietType, image, description, color, colorLinear;
    if (value >= 1 && value < 2) {
      dietType = "Ít tinh bột";
      image = ActivityLess;
      description = [
        "Muốn giảm cân hoặc duy trì cân nặng ổn định\n",
        "Bị tiểu đường hoặc kháng insulin",
        "Theo chế độ ăn low-carb, keto",
        "Người lớn tuổi muốn hạn chế lượng tinh bột",
      ];
      color = "#B266FD";
      colorLinear = "#E3C7FE";
    } else if (value >= 2 && value < 3) {
      dietType = "Tinh bột vừa phải";
      image = ActivityNormal;
      description = [
        "Khỏe mạnh, hoạt động thể chất ở mức trung bình",
        "Muốn duy trì sức khỏe tổng thể",
        "Luyện tập thể thao nhưng không chuyên nghiệp",
        "Phụ nữ mang thai hoặc cho con bú",
      ];
      color = "#B2F042";
      colorLinear = "#DFFFA5";
    } else {
      dietType = "Nhiều tinh bột";
      image = ActivityExtreme;
      description = [
        "Tập luyện thể thao chuyên nghiệp, vận động viên",
        "Lao động chân tay, làm việc nặng nhọc",
        "Trẻ em và vị thanh thiếu niên đang trong giai đoạn phát triển",
        "Muốn tăng cân, cơ bắp",
      ];
      color = "#FFC700";
      colorLinear = "#FFE588";
    }
    return { dietType, image, description, color, colorLinear };
  };

  const { dietType, image, description, color, colorLinear } =
    getDietDetails(diet);
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Chế độ ăn uống của bạn</Text>
      <Text style={styles.sub_text}>
        Mức độ ăn uống của bạn, chúng tôi muốn tạo kế hoạch cá nhân hóa cho bạn
        dựa trên mức độ ăn uống của bạn
      </Text>
      <View style={[styles.diet_container, { width: width - 60 }]}>
        <View style={styles.diet_detail}>
          <View style={styles.diet_img_container}>
            <Image source={image} style={styles.diet_img} />
          </View>
          <Text style={[styles.diet_type, { color: color }]}>{dietType}</Text>
          <Text style={styles.diet_text}>
            {description.map((item, index) => (
              <Text key={index} style={styles.bullet_point}>
                {"\u2022"} {item}
              </Text>
            ))}
          </Text>
        </View>
        <View style={[styles.diet_picker_container, { width: width - 60 }]}>
          <View style={[styles.diet_picker, { borderColor: color }]}>
            <Slider
              style={{ width: 230, height: 40 }}
              onValueChange={(value) => setDiet(value)}
              minimumValue={1}
              maximumValue={4}
              minimumTrackTintColor={color}
              maximumTrackTintColor={colorLinear}
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

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 30,
    marginTop: 30,
  },
  heading_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    textAlign: "center",
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
    lineHeight: 20,
  },
  diet_container: {
    marginTop: 70,
  },
  diet_detail: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  diet_img_container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F2F1",
  },
  diet_type: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  diet_text: {
    height: 60,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 20,
  },
  diet_picker_container: {
    flex: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  diet_picker: {
    width: 280,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B266FD",
    borderRadius: 12,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
