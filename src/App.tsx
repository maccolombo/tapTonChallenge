import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routes/rootNavigation';
import Routes from "./routes/routes";
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor={"green"} />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}