import React from 'react'
import { StyleSheet, View } from 'react-native'

const NavbarList = () => {
  return (
    <View style={[styles.nav_container, { width: width - 32 }]}>
        {recipeNavbars.map((item) => (
          <NavbarItem
            key={item.id}
            item={item}
            selectedTab={selectedTab}
            handleTabPress={handleTabPress}
          />
        ))}
      </View>
  )
}

export default NavbarList

const styles = StyleSheet.create({})