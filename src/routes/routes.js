import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from '../Pages/Login';
import Dashboard from '../pages/dashboard';
// import CriarPedido from '../Pages/CriarPedido';
// import Clientes from "../Pages/Clientes";
import Produtos from "../pages/products";
// import Pedidos from "../Pages/Pedidos"

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
            {/* <Stack.Screen
                    name="Pedidos"
                    component={Pedidos}
                    options={{
                        headerShown: false
                    }}
                /> */}
        </Stack.Navigator>
    );
}