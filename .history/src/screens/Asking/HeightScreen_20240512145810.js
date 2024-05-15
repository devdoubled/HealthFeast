import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import CustomButton from '../../components/Auth/CustomButton';
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