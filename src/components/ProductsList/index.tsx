
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProductsListComponentProps } from './productsList.component.props.type';
import productsActions from '../../store/actions/products';
import * as rootNavigation from '../../routes/rootNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductsListComponent: React.FC<ProductsListComponentProps> = (props: ProductsListComponentProps) => {

    const dispatch = useDispatch()

    const handleAddRemoveButton = () => {
        const method = props.checked ? 'removeProductCart' : 'addProductCart'
        dispatch(productsActions[method](props))
        rootNavigation.navigate("Cart")
    }

    const addQuantity = () => {
        let qtd = props.qtd + 1
        let codProd = props.id
        dispatch(productsActions.updateQuantidadeProduto({ id: codProd, qtd }))
    }
    const removeQuantidade = () => {
        let qtd = props.qtd - 1
        let codProd = props.id
        qtd < 1 ? handleAddRemoveButton() : dispatch(productsActions.updateQuantidadeProduto({ id: codProd, qtd }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.desc}> {props.name} - {props.checked ? 'true' : 'false'}</Text>
            <Image
                style={{
                    width: 70,
                    height: 70,
                }}
                source={{
                    uri: props.url
                }}
            />

            {props.screen === "products" && (
                <TouchableOpacity
                    onPress={() => handleAddRemoveButton()}
                    style={[styles.addButton, { backgroundColor: props.checked ? "#ff6400" : "blue" }]}
                >
                    <Text style={{ color: "#FFF" }}>{props.checked ? "Remover" : "Add"}</Text>
                </TouchableOpacity>
            )}

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                {props.screen === "cart" && (
                    <>
                        <TouchableOpacity
                            onPress={() => addQuantity()}
                            style={{ marginTop: 'auto' }}
                        >
                            <Icon
                                name="add"
                                size={30}
                                color="#132C48"
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder={String(props.qtd)}
                            // onChangeText={(text) => setQtd(parseFloat(text))}
                            //onBlur={() => onBlur()}
                            placeholderTextColor="#000"
                        />
                        <TouchableOpacity
                            onPress={() => removeQuantidade()}
                            style={{ marginTop: 'auto' }}
                        >
                            <Icon
                                color="#132C48"
                                name="remove"
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 'auto' }}
                            onPress={() => handleAddRemoveButton()}
                        >
                            <Icon
                                name="delete"
                                size={30}
                                color="red"
                            />
                        </TouchableOpacity>
                    </>
                )}
            </View>
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
        backgroundColor: "#FFF",
        marginTop: 20,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        flex: 1
    },
    addButton: {
        height: 40,
        width: "100%",
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "#FFF",
        width: '30%',
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        fontSize: 18,
        // marginBottom: 'auto',
        textAlign: 'center',
        marginTop: 10,
        height: 40,
        padding: 5,
        marginHorizontal: 10
    },
    increment: {
        // flexDirection: 'row',
        //  alignItems: 'center',
        width: '100%'
    },
})
export default ProductsListComponent;