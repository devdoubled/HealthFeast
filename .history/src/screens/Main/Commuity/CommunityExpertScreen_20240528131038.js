import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommunityExpertScreen = () => {
    const width = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <NavbarList width={width} navigation={navigation} route={route} />
      </View>
    );
}

export default CommunityExpertScreen

const styles = StyleSheet.create({})