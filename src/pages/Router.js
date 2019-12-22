import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
},
    {
        initialRouteName: "Home",
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerBackTitle: 'R yap',
            headerStyle: {
                backgroundColor: 'lightgrey',

            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold'

            }
        },

    });

export default createAppContainer(AppNavigator);
