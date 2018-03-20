import { AppRegistry } from 'react-native';
// import App from './app/index';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'wateringSchedule.PlantList', // unique ID registered with Navigation.registerScreen
    title: 'Watering', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarTextColor: 'white',
      navBarBackgroundColor: '#2d88d8',
      statusBarColor: '#2570b2'
    }, // override the navigator style for the screen, see "Styling the navigator"  (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" (optional)
  }
});
