import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default [
    {
        id: 1,
        iconType: 'component',
        icon: <MaterialCommunityIcons name="star-plus-outline" size={28} color="#F5CF46" />,
        title: "Gói Premium"
    },
    {
        id: 2,
        iconType: 'component',
        icon: <FontAwesome6 name="user-circle" size={28} color="#9ABF5A" />,
        title: "Hồ sơ"
    },
    {
        id: 3,
        iconType: 'component',
        icon: <MaterialIcons name="history" size={28} color="#9ABF5A" />,
        title: "Lịch sử"
    },
    {
        id: 4,
        iconType: 'component',
        icon: <FontAwesome6 name="bell" size={28} color="#9ABF5A" />,
        title: "Thông báo"
    },
    {
        id: 5,
        iconType: 'component',
        icon: <Ionicons name="options-sharp" size={28} color="#9ABF5A" />,
        title: "Cài đặt"
    },
    {
        id: 6,
        iconType: 'component',
        icon: <MaterialIcons name="security" size={28} color="#9ABF5A" />,
        title: "Trung tâm bảo mật"
    },
    {
        id: 7,
        iconType: 'component',
        icon: <MaterialIcons name="help-outline" size={28} color="#9ABF5A" />,
        title: "Giúp"
    },
    {
        id: 8,
        iconType: 'image',
        icon: require("../assets/images/setting_about.png"),
        title: "Về chúng tôi"
    },
    {
        id: 9,
        iconType: 'component',
        icon: <MaterialIcons name="logout" size={28} color="#9ABF5A" />,
        title: "Đăng xuất"
    },
];
