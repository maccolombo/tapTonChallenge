import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import GFonts from 'react-native-vector-icons/MaterialIcons';
import ProductsListComponent from '../../components/ProductsList';
import { State } from '../../store/reducers';

export default function Cart() {
    const navigation = useNavigation();

    const { cart } = useSelector((state: State) => state.cart);


    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => navigation.goBack()}
            >
                <GFonts
                    name="keyboard-return"
                    size={30}
                    color="#FFF"
                />
            </TouchableOpacity>

            <Text style={styles.title}>Carrinho</Text>

            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <ProductsListComponent
                        qtd={item.qtd}
                        screen="cart"
                        id={item.id}
                        name={item.name}
                        url={item.url}
                        checked={item.checked}
                    />
                )}
                numColumns={2}
                keyExtractor={(item, index) => String(index)}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        // paddingHorizontal: 20
    },
    buttonBack: {
        height: 46,
        width: 46,
        backgroundColor: "#132C48",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 16,
        marginTop: 17,
        position: 'absolute'

    },
    title: {
        alignSelf: 'center',
        fontFamily: 'Lato-Bold',
        marginTop: 28,
        color: "#132C48",
        fontSize: 20
    },
    areaBtnClose: {
        marginLeft: 87
    },
    styleclose: {

    },
    styleOpen: {
        color: "red"
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: "#132C48"
    },
    underline: {
        color: "#132C48",
        fontWeight: 'bold'
    }

});
