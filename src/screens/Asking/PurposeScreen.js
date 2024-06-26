import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import purposeOptions from "../../data/purposeOptions";
import CustomButton from "./../../components/Auth/CustomButton";
const PurposeScreen = ({ onNext, askingData, setAskingData }) => {
  const { width } = useWindowDimensions();
  const [activeId, setActiveId] = useState(askingData.currentPlan);

  const handlePress = (id) => {
    let currentPlan;
    switch (id) {
      case 1:
        currentPlan = 2;
        break;
      case 2:
        currentPlan = 3;
        break;
      case 3:
        currentPlan = 1;
        break;
      default:
        currentPlan = askingData.currentPlan;
        break;
    }
    setActiveId(id === activeId ? null : id);
    setAskingData({ ...askingData, currentPlan });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Mục đích của bạn là gì?</Text>
      <Text style={styles.sub_text}>
        Hiểu rõ mục đích của bạn sẽ giúp chúng tôi tạo kế hoạch cá nhân hóa cho
        bạn dễ dàng hơn
      </Text>
      <View style={[styles.purpose_container, { width: width - 60 }]}>
        {purposeOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handlePress(item.id)}
            style={[
              styles.purpose_item,
              {
                marginHorizontal: item.isMiddle ? 15 : 0,
                backgroundColor: item.id === activeId ? "#464646" : "#B4B4B4",
              },
            ]}
          >
            <Image source={item.image} />
            <Text style={styles.purpose_text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.action_container, { width: width - 60 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  );
};

export default PurposeScreen;

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
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
    lineHeight: 20,
  },
  purpose_container: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  purpose_item: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    borderRadius: 12,
  },
  purpose_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 10,
  },
  action_container: {
    position: "absolute",
    bottom: 20,
  },
});
