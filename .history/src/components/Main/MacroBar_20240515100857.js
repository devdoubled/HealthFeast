import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MacroBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text style={styles.value}>{`${value}g`}</Text>
    </View>
  );
};

export default MacroBar;

const styles = StyleSheet.create({});
