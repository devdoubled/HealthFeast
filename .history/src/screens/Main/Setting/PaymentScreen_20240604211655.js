import React from 'react';
import { Dimensions, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";

const PaymentScreen = () => {
    const width = Dimensions.get("window").width;

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
                <Pressable style={styles.package_item} key={item.id} onPress={() => handleSelectPackage(item.id)}>
                    <View style={styles.package_header}>
                        <Text style={styles.package_title}>{item.package_title}</Text>
                        <View style={styles.package_select}>
                            {selectedPackage === item.id && (
                                <AntDesign name="checkcircle" size={20} color="#9ABF5A" />
                            )}
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
                </Pressable>
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
    }
})