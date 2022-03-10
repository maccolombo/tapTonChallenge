
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import * as rootNavigation from '../../routes/rootNavigation';
import GFontes from 'react-native-vector-icons/MaterialIcons';
import ProductsListComponent from '../../components/ProductsList/index';
import productsActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';

const Products = () => {

import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Alert, ProgressBarAndroidBase } from 'react-native';
import services from '../../services';
import GFontes from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//import IconInput from '../../components/iconInput';
import ProductsListComponent from '../../components/ProductsList/index';
//import { getProdutos } from '../../services/produtos';
import productsActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';

const Produtos = () => {

   const dispatch = useDispatch();
   const { productsList } = useSelector((state: State) => state.products);
   const { cart } = useSelector((state: State) => state.cart);

   useEffect(() => {
      dispatch(productsActions.productsActions.getProductsList())
   }, []);

   return (
      <View style={styles.container}>
         <View style={styles.contentHeader}>
            <TouchableOpacity
               style={styles.buttonBack}
               onPress={() => rootNavigation.navigate("Dashboard")}
            >
               <GFontes
                  name="keyboard-return"
                  size={30}
                  color="#FFF"
               />
            </TouchableOpacity>
            <Text style={styles.textHeader}> Produtos </Text>
            <TouchableOpacity
               style={[styles.buttonBack, { marginRight: 15 }]}
               onPress={() => rootNavigation.navigate("Cart")}
            >
               <GFontes
                  name="shopping-cart"
                  size={30}
                  color="#ff6400"
               />
               <GFontes
                  style={{
                     position: 'absolute',
                     right: 0,
                     top: 0
                  }}
                  name="circle"
                  size={25}
                  color="red"
               >
               </GFontes>
               <View style={{
                  position: 'absolute',
                  right: 8,
                  top: 1
               }}>

                  <Text style={{
                     color: "#FFF",
                     fontSize: 16
                  }}>
                     {String(cart.length)}
                  </Text>
               </View>
            </TouchableOpacity>
         </View>

         <FlatList
            data={productsList}
            renderItem={({ item }) => (
               <ProductsListComponent
                  qtd={item.qtd}
            renderItem={({ item, index }) => (
               <ProductsListComponent
                  screen="products"
                  id={item.id}
                  name={item.name}
                  url={item.image_link}
                  checked={item.checked}
               />
            )}
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
   },
   contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
   },
   textHeader: {
      fontFamily: "Lato-Bold",
      color: "#132C48",
      fontSize: 20,
      marginTop: 'auto',
   },
   initialText: {
      alignSelf: 'center',
      marginTop: 5
   }
});

export default Products;