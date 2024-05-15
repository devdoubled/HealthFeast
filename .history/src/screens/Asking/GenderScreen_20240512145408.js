import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/Auth/CustomButton'
const GenderScreen = ({onNext}) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Trọng lượng mục tiêu của bạn?</Text>
      <Text style={styles.sub_text}>
        Trọng lượng mục tiêu là rất quan trọng để tạo ra một kế hoạch giúp bạn
        đạt được kết quả mong muốn
      </Text>
      <View style={[styles.action_container, { width: width - 70 }]}>
        <CustomButton text="Tiếp tục" onPress={handleNext} />
      </View>
    </View>
  )
}

export default GenderScreen

const styles = StyleSheet.create({})