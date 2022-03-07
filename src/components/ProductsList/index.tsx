
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProductsListComponentProps } from './productsList.component.props.type';
import cartActions from '../../store/actions/cart';
import * as rootNavigation from '../../routes/rootNavigation';
// import productsAction from '../../store/actions/products'

const ProductsListComponent: FC = (props: ProductsListComponentProps): JSX.Element => {

    const dispatch = useDispatch()
    const handleAddButton = () => {
        console.log("props: ", props.checked)
        if (!props.checked) {
            console.log("caiu aqui no if ")
            dispatch(cartActions.setCartItem(props))
        } else {
            console.log("caiu aqui no else ")
            dispatch(cartActions.removeCartItem(props))
        }
        rootNavigation.navigate("Cart")
    }
    // console.log("prop: ", props)
    return (
        <View style={styles.container}>
            <Text style={styles.desc}> {props.name}</Text>
            <Image
                style={{
                    width: 70,
                    height: 70,
                }}
                source={{
                    uri: props.url
                }}
            />

            <TouchableOpacity
                onPress={() => handleAddButton()}
                style={styles.addButton}
            >
                <Text style={{ color: "#FFF" }}>{props.checked ? "Remover" : "Add"}</Text>
            </TouchableOpacity>

        </View >
    );
}
const styles = StyleSheet.create({
    desc: {
        color: "#000",
        fontWeight: '900'
    },
    text: {
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    container: {
        backgroundColor: "#FFF",// Colors.background_secondary,
        marginTop: 10,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        flex: 1
    },
    addButton: {
        height: 40,
        width: "100%",
        backgroundColor: "#ff6400",
        // backgroundColor: Colors.primary,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default ProductsListComponent;