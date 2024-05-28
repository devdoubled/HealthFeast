import { FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';

export const getIcon = (exercise)  => {
    if(exercise === "Chạy bộ") {
        return (<FontAwesome5 name="running" size={28} color="#E55733" />)
    }else if (exercise === "Bơi lội") {
        return (<FontAwesome5 name="swimmer" size={28} color="#E55733" />)
    }else if (exercise === "Đá bóng") {
        return (<FontAwesome name="soccer-ball-o" size={28} color="#E55733" />)
    }else if (exercise === "Bóng rổ") {
        return (<FontAwesome5 name="basketball-ball" size={28} color="#E55733" />)
    }else if (exercise === "Đạp xe") {
        return (<Ionicons name="bicycle-sharp" size={28} color="#E55733" />)
    }else if (exercise === "Cardio") {
        return (<Fontisto name="heartbeat-alt" size={28} color="#E55733" />)
    }else {
        return ( <MaterialIcons name="sports-gymnastics" size={28} color="#E55733" />)
    }
  }