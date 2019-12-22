import React, { Component } from 'react'
import Home from './src/page/Card';
import Login from './src/component/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class App extends Component {
  render() {
  
    return (
      <AppContainer
        
      />
    );
  }
}
const AppNavigator = createStackNavigator({
  Login:Login,
  Home:Home
},{
initialRouteName:"Login"
})

const AppContainer = createAppContainer(AppNavigator);


