import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from "./Home"
import Projects from "./Projects"


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = "home";
    iconColor = `#${focused ? '5F87E7' : 'BEBEBE'}`
} else if (routeName === 'Projects') {
    iconName = "appstore-o";
    iconColor = `#${focused ? '5F87E7' : 'BEBEBE'}`
  }
  return <Icon name={iconName} size={20} color={iconColor}/>;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: Home },
      Projects: { screen: Projects },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#5F87E7',
        inactiveTintColor: '#BEBEBE',
      },
    }
  )
);
