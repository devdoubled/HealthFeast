import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";
import MomoLogo from "../../../assets/images/momo_logo.png";
import QrCode from "../../../assets/images/qr_code.png";
const PaymentScreen = () => {
    const width = Dimensions.get("window").width;
    const item = {
        id: 1,
        package_title: `Gói "Ăn Uống Vui Vẻ"`,
        package_price: 0,
        package_features: [
            "Gợi ý thực Đơn", "Scan calo món ăn", "Bản tin blog"
        ]
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <View style={styles.logo_content}>
                    <Image source={Logo} style={styles.logo_img} />
                </View>
            </View>
            <View style={[styles.payment_container, { width: width - 32 }]}>
                <View style={styles.payment_header}>
                    <Text style={styles.payment_title}>Bạn đã chọn</Text>
                    <Pressable style={styles.payment_change}>
                        <Text style={styles.change_text}>Thay đổi gói</Text>
                    </Pressable>
                </View>
                <View style={styles.package_item}>
                    <View style={styles.package_header}>
                        <Text style={styles.package_title}>{item.package_title}</Text>
                        <View style={styles.package_select}>
                            <AntDesign name="checkcircle" size={20} color="#9ABF5A" />
                        </View>
                    </View>
                    <View style={styles.package_price}>
                        <Text style={styles.price}>{item.package_price}</Text>
                        <Text style={styles.unit}>đ/Tháng</Text>
                    </View>
                    <View style={styles.package_feature}>
                        <Text style={styles.feature_text}>Tính năng:</Text>
                        <View style={styles.feature_content}>
                            {item.package_features.map((feature, index) => (
                                <View style={styles.feature_func} key={index}>
                                    <Text>{'\u2022'}</Text>
                                    <Text style={styles.feature_func_text}>{feature}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={styles.payment_register}>
                    <Text style={styles.register_title}>Đăng kí</Text>
                    <Text style={styles.register_desc}>Tự động gia hạn hằng tháng, hủy bất cứ lúc nào.</Text>
                </View>
                <View style={styles.payment_info_container}>
                    <Pressable style={styles.payment_info_header}>
                        <View>
                            <Text style={styles.payment_info_title}>Thanh toán đến thẻ tín dụng hoặc ví</Text>
                            <Text style={styles.payment_info_price}>49.000 đ/tháng</Text>
                        </View>
                        <AntDesign name="up" size={24} color="black" />
                    </Pressable>
                    {/* <View style={styles.payment_info_content}>
                        <Pressable style={styles.payment_option_momo}>
                            <View style={styles.payment_option_img}>
                                <Image source={MomoLogo} style={styles.payment_option_momo_img} />
                            </View>
                            <Text style={styles.payment_option_text}>Ví momo</Text>
                        </Pressable>
                        <Pressable style={styles.payment_option_credit}>
                            <View style={styles.payment_option_img}>                           
                                <Image source={CreditLogo} style={styles.payment_option_credit_img} />
                            </View>
                            <Text style={styles.payment_option_text}>Thẻ tín dụng hoặc thẻ ghi nợ</Text>
                        </Pressable>
                    </View> */}
                    <View style={styles.payment_info_detail}>
                        <View style={styles.payment_detail}>
                            <View style={styles.payment_detail_title}>
                                <Text style={styles.payment_detail_text}>Ví momo</Text>
                                <Image source={MomoLogo} style={styles.payment_detail_momo_img} />
                            </View>
                            <View style={styles.payment_user_detail}>
                                <Text style={styles.detail_text}>SĐT</Text>
                                <Text style={styles.detail_number_text}>0837123099</Text>
                                <Text style={styles.detail_text}>Tên người nhận</Text>
                                <Text style={styles.detail_user_text}>Nguyen Tran Bang Bang</Text>
                            </View>
                        </View>
                        <View style={styles.payment_qr_code}>
                            <Image source={QrCode}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
    },
    logo_container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
    },
    logo_content: {
        width: 100,
        height: 100,
    },
    logo_img: {
        width: "100%",
        height: "100%"
    },
    payment_container: {
        marginHorizontal: 16,
    },
    payment_header: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    payment_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 22,
        color: "#000000",
    },
    change_text: {
        fontFamily: "Montserrat-Regular",
        fontSize: 15,
        color: "#B4B4B4",
        textDecorationLine: "underline",
    },
    package_item: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        borderColor: "#9ABF5A",
        backgroundColor: "#F3F2F1"
    },
    package_header: {
        flexDirection: "row",
        aligmItems: "center",
        justifyContent: "space-between",
    },
    package_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
        color: "#9ABF5A"
    },
    package_select: {
        width: 30,
        height: 30,
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "#B4B4B4",
    },
    package_price: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    price: {
        width: 70,
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#000000",
    },
    unit: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: "#000000",
        marginLeft: 15,
    },
    package_feature: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 8,
    },
    feature_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 15,
        color: "#000000",
    },
    feature_content: {
        marginLeft: 15
    },
    feature_func: {
        flexDirection: "row",
        marginBottom: 5
    },
    feature_func_text: {
        width: 250,
        fontFamily: "Montserrat-Regular",
        fontSize: 15,
        color: "#000000",
    },
    payment_register: {
        marginBottom: 15,
    },
    register_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 22,
        color: "#000000",
    },
    register_desc: {
        fontFamily: "Montserrat-Regular",
        fontSize: 15,
        color: "#000000",
        marginTop: 5,
    },
    payment_info_container: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#B4B4B4"
    },
    payment_info_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    payment_info_title: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        color: "#000000",
    },
    payment_info_price: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#000000",
        marginTop: 5
    },
    payment_info_content: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 10,
        borderColor: "#B4B4B4"
    },
    payment_option_momo: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#B4B4B4"
    },
    payment_option_img: {
        width: 60,
    },
    payment_option_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#000000",
        marginLeft: 10,
    },
    payment_option_momo_img: {
        width: 40,
        height: 40,
    },
    payment_option_credit: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    payment_option_credit_img: {
        width: 50,
        height: 50,
    },
    payment_info_detail: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 10,
        borderColor: "#B4B4B4"
    },
    payment_detail: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    payment_detail_title: {

    },
    payment_user_detail: {

    },
    payment_detail_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#000000",
    },
    payment_detail_momo_img: {
        width: 50,
        height: 50,
        marginTop: 5,
    },
    detail_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: "#B4B4B4",
        paddingBottom: 5,
    },
    detail_number_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: "#000000",
        paddingBottom: 5,
    },
    
})