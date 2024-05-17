import React from 'react'
import { StyleSheet, View } from 'react-native'
import NavbarItem from "../../components/Main/Recipe/NavbarItem";
import recipeNavbars from "../../data/recipeNavbars";
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

const styles = StyleSheet.create({
    nav_container: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 15,
      },
})