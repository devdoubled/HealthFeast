import {
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
const iconConfig = {
  "Chạy bộ": { component: FontAwesome5, name: "running", size: 24 },
  "Bơi lội": { component: FontAwesome5, name: "swimmer", size: 24 },
  "Đá bóng": { component: FontAwesome, name: "soccer-ball-o", size: 24 },
  "Bóng rổ": { component: FontAwesome5, name: "basketball-ball", size: 24 },
  "Đạp xe": { component: Ionicons, name: "bicycle-sharp", size: 28 },
  Cardio: { component: Fontisto, name: "heartbeat-alt", size: 28 },
  default: { component: MaterialIcons, name: "sports-gymnastics", size: 28 },
};

export const getIcon = (exercise) => {
  const {
    component: IconComponent,
    name,
    size,
  } = iconConfig[exercise] || iconConfig.default;
  return <IconComponent name={name} size={size} color="#E55733" />;
};
