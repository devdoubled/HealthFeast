import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import askingIcon1 from "../../assets/images/asking_icon_1.png";
import askingIcon2 from "../../assets/images/asking_icon_2.png";
import askingIcon3 from "../../assets/images/asking_icon_3.png";
import askingIcon4 from "../../assets/images/asking_icon_4.png";
import askingIcon5 from "../../assets/images/asking_icon_5.png";
const AskingBgIcon = () => {
  return (
    <View style={styles.asking_icon}>
          <Image source={askingIcon1} style={styles.icon_1} />
          <Image source={askingIcon2} style={styles.icon_2} />
          <Image source={askingIcon3} style={styles.icon_3} />
          <Image source={askingIcon4} style={styles.icon_4} />
          <Image source={askingIcon5} style={styles.icon_5} />
        </View>
  )
}

export default AskingBgIcon

const styles = StyleSheet.create({})