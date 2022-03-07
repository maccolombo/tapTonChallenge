import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Alert, ProgressBarAndroidBase } from 'react-native';
import services from '../../services';
//import GFontes from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//import IconInput from '../../components/iconInput';
import ProductsList from '../../components/ProductsList/index';
//import { getProdutos } from '../../services/produtos';
import productsActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Produtos = () => {
   const dispatch = useDispatch();
   const { productsList } = useSelector((state: State) => state.products);

   useEffect(() => {
      dispatch(productsActions.productsActions.setProductsList())
   }, []);

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

         <FlatList
            data={productsList}
            renderItem={({ item, index }) => (
               <ProductsList
                  index={index}
                  name={item.name}
                  url={item.image_link}
               />
            )}
            // renderItem={(item) => (
            //    <ProductsList
            //       id={item.item.id}
            //       name={item.item.name}
            //       url={item.item.image_link}
            //    />
            // )}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
         />

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

export default Produtos;