import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const ScanCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})