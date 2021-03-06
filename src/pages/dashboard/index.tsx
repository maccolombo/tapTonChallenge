import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GFonts from 'react-native-vector-icons/MaterialIcons';


export default function Dashboard() {
    const navigation = useNavigation();

    const button = [
        { name: "inventory", text: "Produtos", busca: 'Produtos' },
    ]

    return (
        <ImageBackground
            source={require("../../assets/tapLogo.png")}
            resizeMode="cover"
            style={styles.image}
        >
            <View style={styles.container}>

                {button.map((item: any, i) => (
                    // item.busca === "Cart" 
                    <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate(item.busca)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    contImage: {
        height: 203,
        // backgroundColor: "#000"

    },
    image: {
        flex: 1,
        justifyContent: "center"
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