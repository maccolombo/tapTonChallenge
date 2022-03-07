import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routes/rootNavigation';
import Routes from "./routes/routes";
// import store from './store';
// import { Provider } from 'react-redux';
// import { StatusProvider } from './contexts/status'

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
}