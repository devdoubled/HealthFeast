import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, G, Circle, Line } from 'react-native-svg';

const GaugeChart = ({ value }) => {
  const radius = 100;
  const strokeWidth = 10;
  const maxValue = 100;
  const angle = (value / maxValue) * 180;

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius + strokeWidth}>
        <G rotation="-90" origin={`${radius}, ${radius}`}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius}
            stroke="#E6E6E6"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Line
            x1={radius}
            y1={radius}
            x2={radius + radius * Math.cos((Math.PI * angle) / 180)}
            y2={radius + radius * Math.sin((Math.PI * angle) / 180)}
            stroke="#0000FF"
            strokeWidth={strokeWidth}
          />
        </G>
      </Svg>
      <Text style={styles.text}>{value} KG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default GaugeChart;
