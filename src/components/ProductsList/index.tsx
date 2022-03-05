
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductsListComponentProps } from './productsList.component.props.type';

const ProductsListComponent: FC = (props: ProductsListComponentProps): JSX.Element => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.desc}> {props.name}</Text>
            <Image
                style={{
                    width: 50,
                    height: 50,
                }}
                source={{
                    uri: props.url
                }}
            />
            {/* <View style={styles.secondRow}>
                <Text style={styles.text}>{props.data.item.SALDO_ATUAL}</Text>
                <Text style={styles.text}>{"Estoque:", props.data.item.COD_BARRA}</Text>
                <Text style={styles.text}>{"R$ ", props.data.item.VLR_VISTA}</Text>
            </View>

            <View style={styles.secondRow}>
                <Text>Cor: {props.data.item.COR}</Text>
                <Text>Tamanho: {props.data.item.TAMANHO}</Text>
            </View>

            <TouchableOpacity
                onPress={() => handleAddButton()}
                style={styles.addButton}
            >
                <Text style={{ color: Colors.light_text }}>Adicionar</Text>
            </TouchableOpacity> */}
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
        backgroundColor: "#FFF",
        // backgroundColor: Colors.primary,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default ProductsListComponent;