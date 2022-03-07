import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/dashboard';
import Produtos from "../pages/products";
import Cart from "../pages/cart";

const Stack = createNativeStackNavigator();

export default function routes() {
    return (
        <Stack.Navigator initialRouteName="Dashboard">

            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}