import 'react-native-gesture-handler';
import React from 'react';
// in app imports
import MainApp from './MainApp'
import store from './redux/store'

// third party imports
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

