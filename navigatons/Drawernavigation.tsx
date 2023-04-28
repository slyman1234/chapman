import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import Bottomnavigation from "./Bottomnavigation";
import Customdrawercomponent from "../components/homecomponents/Customdrawercomponent";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <Customdrawercomponent navigation={navigation} />
    </DrawerContentScrollView>
  );
};

const Drawernavigation: FC = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
        drawerStyle: {
          backgroundColor: "rgba(00, 00, 00, 0.7)",
          marginTop: 50,
          paddingBottom: 40,
          width: dimensions.width,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="f">
        {(props: any) => <Bottomnavigation {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default Drawernavigation;
