import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default [
    {
        id: 1,
        exercise: "Chạy bộ",
        icon : <FontAwesome5 name="running" size={24} color="black" />
    },
    {
        id: 2,
        exercise: "Bơi lội",
        icon: <FontAwesome5 name="swimmer" size={24} color="black" />
    },
    {
        id: 3,
        exercise: "Đá bóng",
        icon: <Ionicons name="football" size={24} color="black" />
    },
    {
        id: 4,
        exercise: "Bóng rổ",
        icon: <FontAwesome5 name="basketball-ball" size={24} color="black" />
    },
    {
        id: 5,
        exercise: "Đạp xe",
        icon: <Ionicons name="bicycle-sharp" size={24} color="black" />
    },
    {
        id: 6,
        exercise: "Cardio"
    },
    {
        id: 7,
        exercise: "Gym",
        <MaterialIcons name="sports-gymnastics" size={24} color="black" />
    },
]