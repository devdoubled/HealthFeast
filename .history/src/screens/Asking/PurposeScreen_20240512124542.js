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
const PurposeScreen = () => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePress = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Mục đích của bạn là gì?</Text>
      <Text style={styles.sub_text}>
        Hiểu rõ mục đích của bạn sẽ giúp chúng tôi tạo kế hoạch cá nhân hóa cho
        bạn dễ dàng hơn
      </Text>
      <View style={[styles.purpose_container, { width: width - 70 }]}>
        {purposeOptions.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handlePress(index)}
            style={[
              styles.purpose_item,
              { marginHorizontal: item.isMiddle ? 15 : 0,
                backgroundColor: index === activeIndex ? 'lightblue' : 'transparent', // Apply active style if index matches activeIndex
               },
            ]}
          >
            <Image source={item.image} />
            <Text style={styles.purpose_text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <View style={[styles.action_container, { width }]}>
        <CustomButton text="Tiếp tục" />
      </View> */}
    </View>
  );
};

export default PurposeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 35,
    marginTop: 20,
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
  },
  purpose_container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  purpose_item: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#B4B4B4",
  },
  purpose_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 5,
  },
});