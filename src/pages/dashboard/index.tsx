import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GFonts from 'react-native-vector-icons/MaterialIcons';
//import Logo from '../../Assets/images/Logo.svg'

export default function Dashboard() {
    const navigation = useNavigation();

    const buttons = [
        { name: "inventory", text: "Produtos", busca: 'Produtos' },
        { name: "shopping-cart", text: "Carrinho", busca: 'Cart' },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.imageLogo}>
                {/* <Logo height={66} width={304} /> */}
            </View>
            {buttons.map((item: any, i) => (
                <TouchableOpacity
                    key={i}
                    onPress={() => navigation.navigate(item.busca)}
                >
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <View
                            style={styles.squareHome}>
                            <GFonts
                                name={item.name}
                                size={30}
                                color="#ff6400"
                            />
                        </View>
                        <Text style={styles.textButtons}>{item.text}</Text>
                    </View>
                </TouchableOpacity>
            ))}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contImage: {
        height: 203,
        // backgroundColor: "#000"

    },
    imageLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        marginBottom: 55
    },
    squareHome: {
        height: 46,
        width: 46,
        borderRadius: 5,
        backgroundColor: "#132C48",
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 11,
        flexDirection: 'row'


    },
    textButtons: {
        fontFamily: "Lato-Regular",
        fontSize: 20,
        color: "#132C48",
        marginLeft: 11
    },
    squareHomeFinal: {
        height: 46,
        width: 46,
        borderRadius: 5,
        backgroundColor: "#132C48",
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 11,
        flexDirection: 'row'
    },
    textButtonsFinal: {
        fontFamily: "Lato-Regular",
        fontSize: 20,
        color: "#132C48",
        marginLeft: 11,
    },

});