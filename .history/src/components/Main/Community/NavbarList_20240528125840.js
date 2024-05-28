import { default as React, default as React } from "react";
import { StyleSheet, View } from "react-native";

const NavbarList = () => {
    const [selectedTab, setSelectedTab] = useState("Scan");

    useEffect(() => {
      const screen = route.params?.screen ? route.params.screen : "Scan";
      setSelectedTab(screen);
    }, [route.params]);
  
    const handleTabPress = (screen, title) => {
      setSelectedTab(title);
      navigation.navigate(screen, { screen: title });
    };
    return (
      <View style={[styles.nav_container, { width: width - 32 }]}>
        {searchNavbars.map((item) => (
          <NavbarItem
            key={item.id}
            item={item}
            selectedTab={selectedTab}
            handleTabPress={handleTabPress}
          />
        ))}
      </View>
    );
}

export default NavbarList

const styles = StyleSheet.create({})