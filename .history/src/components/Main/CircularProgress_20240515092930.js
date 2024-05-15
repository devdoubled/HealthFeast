import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircularProgress = () => {
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
          stroke="#4CAF50"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${eaten} kCal Eaten`}</Text>
        <Text style={styles.text}>{`${left} kCal Left`}</Text>
      </View>
    </View>
  )
}

export default CircularProgress

const styles = StyleSheet.create({})