import Main from './src/Main';
import Chat from './src/Chat';

import { createStackNavigator } from 'react-navigation';

const navigator = createStackNavigator({
    Main: { screen: Main},
    Chat: { screen: Chat},
});


export default navigator;
