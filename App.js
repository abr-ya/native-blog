import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ItemScreen from './src/screens/ItemScreen';
import EditScreen from './src/screens/EditScreen';
import NewScreen from './src/screens/NewScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Item: ItemScreen,
  New: NewScreen,
  Edit: EditScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog App',
    //headerRight: '+',
  },
});

const App = createAppContainer(navigator);

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
