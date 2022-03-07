import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routes/rootNavigation';
import Routes from "./routes/routes";
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}