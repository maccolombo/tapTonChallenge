import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartItemComponentProps } from './cartItem.component.props.type';
// import Colors from '../../styles/Colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Creators as ActionsPedido } from '../../store/ducks/pedido';
// import { useDispatch } from 'react-redux';

const CartItem: FC = (props: CartItemComponentProps): JSX.Element => {
    // const dispatch = useDispatch();

    const handleEdit = async () => {
      //  dispatch(ActionsPedido.sagaRequestById(props.data.item.ID))
    }
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.textDark}>
                    {"lala"}
                </Text>
                <Text style={styles.textDark}>
                    {}
                </Text>
            </View>

            <View style={styles.dateTime}>
                <Text style={{ marginRight: 10 }}>{}</Text>
                <Text>{}</Text>
            </View>

            <TouchableOpacity
               // onPress={() => handleEdit()}
                style={{ marginRight: 10 }}
            >
                {/* <Icon
                    name="edit"
                    size={35}
                    color={Colors.primary}
                /> */}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: '100%',
        padding: 10,
        flexDirection: 'row'
    },
    textDark: {
        color: "#000",
        fontWeight: '900'
    },
    dateTime: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
export default CartItem;