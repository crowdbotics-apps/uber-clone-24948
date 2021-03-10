import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps213371Navigator from '../features/Maps213371/navigator';
import Additem213370Navigator from '../features/Additem213370/navigator';
import Maps213366Navigator from '../features/Maps213366/navigator';
import UserProfile213362Navigator from '../features/UserProfile213362/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps213371: { screen: Maps213371Navigator },
Additem213370: { screen: Additem213370Navigator },
Maps213366: { screen: Maps213366Navigator },
UserProfile213362: { screen: UserProfile213362Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
