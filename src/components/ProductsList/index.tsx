
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductsListComponentProps } from './productsList.component.props.type';

const ProductsListComponent: FC = (props: ProductsListComponentProps): JSX.Element => {
    // console.log(props)
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
                //   onPress={() => handleAddButton()}
                style={styles.addButton}
            >
                <Text style={{ color: "#FFF" }}>{props.id % 2 === 0 ? "Remover" : "Add"}</Text>
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