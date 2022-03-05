import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Alert } from 'react-native';
//import GFontes from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//import IconInput from '../../components/iconInput';
//import ProdutosListagem from '../../components/ProdutosListagem';
//import { getProdutos } from '../../services/produtos';

export default function Produtos() {
  // const navigation = useNavigation();
   const [produtos, setProdutos] = useState([]);

   const listarProdutos = async (text) => {
      try {
         if (text.length >= 3) {
            const res = await getProdutos(text)
            setProdutos(res.data.data)
         }
         if (text.length < 3) {
            setProdutos([])
         }
      } catch (error) {
         Alert.alert(String(error))
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.contentHeader}>
            <TouchableOpacity
               style={styles.buttonBack}
             //  onPress={() => navigation.goBack()}
            >
               {/* <GFontes
                  name="keyboard-return"
                  size={30}
                  color="#FFF"
               /> */}
            </TouchableOpacity>
            <Text style={styles.textHeader}> Produtos </Text>
         </View>

         {/* <IconInput
            onChangeText={(text) => listarProdutos(text)}
         /> */}

         {produtos.length <= 0 && (
            <Text style={styles.initialText}>Comece a digitar para pesquisar</Text>
         )}

         {/* <FlatList
            data={produtos}
            renderItem={(item) => (
               <ProdutosListagem
                  data={item}
               />
            )}
            keyExtractor={(item, index) => String(index)}
         /> */}

      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F3F3F3"
   },
   buttonBack: {
      height: 46,
      width: 46,
      backgroundColor: "#132C48",
      borderRadius: 5,
      marginLeft: 16,
      marginTop: 4,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
   },
   contentHeader: {
      flexDirection: 'row',
      justifyContent: 'center'
   },
   textHeader: {
      fontFamily: "Lato-Bold",
      color: "#132C48",
      fontSize: 20,
      marginTop: 15,
      alignSelf: 'center'
   },
   initialText: {
      alignSelf: 'center',
      marginTop: 5
   }
});