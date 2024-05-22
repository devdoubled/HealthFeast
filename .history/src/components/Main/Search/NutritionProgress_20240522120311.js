import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NutritionProgress = ({ eaten, target }) => {
    const radius = 100;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius;
  const svgSize = 2 * (radius + strokeWidth);
  const strokeDashoffset = circumference * (1 - eaten / target);
  return (
    <View style={styles.container}>
      <Svg width={svgSize} height={svgSize}>
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#e6e6e6"
          fill="none"
        />
        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#9ABF5A"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Image source={CaloriesIcon} style={styles.icon_img} />
        <Text style={styles.calories}>
          {`${target - eaten}`} <Text style={styles.text_calories}>kCal</Text>
        </Text>
        <Text style={styles.text_status}>Duy trì</Text>
      </View>
    </View>
  )
}

export default NutritionProgress

const styles = StyleSheet.create({})