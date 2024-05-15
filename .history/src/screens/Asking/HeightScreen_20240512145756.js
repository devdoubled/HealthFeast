import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeightScreen = ({onNext}) => {
  const { width } = useWindowDimensions();
  const handleNext = () => {
    onNext();
  };
  return (
    <View>
      <Text>HeightScreen</Text>
    </View>
  )
}

export default HeightScreen

const styles = StyleSheet.create({})