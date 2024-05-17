import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
export default [
  {
    id: 1,
    title: "Đăng nhập với Apple",
    image: <AntDesign name="apple1" size={24} color="#9ABF5A" style={styles.login_social_img}/>,
  },
  {
    id: 2,
    title: "Đăng nhập với Google",
    image: <AntDesign name="google" size={24} color="#9ABF5A" style={styles.login_social_img}/>
  },
  {
    id: 3,
    title: "Đăng nhập với Facebook",
    image: <FontAwesome5 name="facebook" size={24} color="#9ABF5A" style={styles.login_social_img}/>
  },
];
