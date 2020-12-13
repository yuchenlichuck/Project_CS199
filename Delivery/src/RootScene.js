

import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'
import Login from "./LoginScene";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import color from './widget/color'
import { screen, system } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'
import OrderFinishScene from './scene/GroupPurchase/OrderFinishScene'
import axios from "axios";
const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState: any) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}


class RootScene extends PureComponent<{}> {
  constructor() {
    super()

    StatusBar.setBarStyle('light-content')
  }

  render() {
      return (

          <AppContainer
              onNavigationStateChange={
                (prevState, currentState) => {
                  const currentScene = getCurrentRouteName(currentState)
                  const previousScene = getCurrentRouteName(prevState)
                  if (previousScene !== currentScene) {
                    if (lightContentScenes.indexOf(currentScene) >= 0) {
                      StatusBar.setBarStyle('light-content')
                    } else {
                      StatusBar.setBarStyle('dark-content')
                    }
                  }
                }
              }
          />
      )
  }
}

const Tab = createBottomTabNavigator(
  {

    Home: {
      screen: createStackNavigator({ Home: HomeScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_homepage.png')}
            selectedImage={require('./img/tabbar/tabbar_homepage.png')}
          />
        )
      }),
    },


    Order: {
      screen: createStackNavigator({ Order: OrderScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Order',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_order.png')}
            selectedImage={require('./img/tabbar/tabbar_order.png')}
          />
        )
      }),
    },

    Mine: {
      screen: createStackNavigator({ Mine: MineScene }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Mine',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_mine.png')}
            selectedImage={require('./img/tabbar/tabbar_mine.png')}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: { backgroundColor: '#ffffff' },
    },
  }
)

Tab.navigationOptions = {
  headerShown: false,

};

const AppNavigator = createStackNavigator(
  {
      Login: {screen:Login},
      HomeScene: { screen: HomeScene },
    Tab: { screen: Tab },
    Web: { screen: WebScene },
    GroupPurchase: { screen: GroupPurchaseScene },
    OrderFinish: { screen: OrderFinishScene },


  },
  {
    defaultNavigationOptions: {
      headerBackTitle: ' ',
      headerTintColor: '#333333',
      showIcon: true,
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default RootScene
