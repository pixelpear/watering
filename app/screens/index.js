import { Navigation } from 'react-native-navigation';

import PlantList from './PlantList';
// import PlantEdit from './PlantEdit';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('wateringSchedule.PlantList', () => PlantList);
}
