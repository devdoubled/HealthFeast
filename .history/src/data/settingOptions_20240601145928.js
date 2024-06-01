import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default [
    {
        id: 1,
        icon: <MaterialCommunityIcons name="star-plus-outline" size={24} color="black" />,
        title: "Gói Premium"
    },
    {
        id: 2,
        icon: <FontAwesome6 name="user-circle" size={24} color="black" />,
        title: "Hồ sơ"
    },
    {
        id: 3,
        icon:<MaterialIcons name="history" size={24} color="black" />,
        title: "Lịch sử"
    },
    {
        id: 4,
        icon: <FontAwesome6 name="bell" size={24} color="black" />,
        title: "Thông báo"
    },
    {
        id: 5,
        icon: <Ionicons name="options-sharp" size={24} color="black" />,
        title: "Cài đặt"
    },
    {
        id: 6,
        icon: <MaterialIcons name="security" size={24} color="black" />,
        title: "Trung tâm bảo mật"
    },
    {
        id: 7,
        icon: require("../assets/images/setting_help.png"),
        title: "Giúp"
    },
    {
        id: 8,
        icon: require("../assets/images/setting_about.png"),
        title: "Về chúng tôi"
    },
    {
        id: 9,
        icon: require("../assets/images/setting_logout.png"),
        title: "Đăng xuất"
    },
]