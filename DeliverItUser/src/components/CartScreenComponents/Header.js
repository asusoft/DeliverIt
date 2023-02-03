//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import icons from '../../../assets/constants/icons';
import COLORS from '../../../assets/constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';

// create a component
const Header = ({ navigation, quantity }) => {

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <Pressable
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: COLORS.dark,
                    backgroundColor: COLORS.background
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.dark
                    }}
                />
            </Pressable>

            <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10 }}>MY CART</Text>

            {/* Cart */}
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: COLORS.dark,
                    backgroundColor: COLORS.background
                }}
            >
                <Image
                    source={icons.bag}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.dark
                    }}
                />

                <View style={styles.badge}>
                    <Text style={styles.quantityNumber}>{quantity}</Text>
                </View>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    badge: {
      position: 'absolute',
      top: 5,
      right: 5,
      height: 12,
      width: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: COLORS.primary,
    },
    quantityNumber: {
      color: COLORS.white,
      ...Platform.select({
        android: { lineHeight: 17 },
        ios: { lineHeight: 0 },
      }),
      fontSize: 8,
    },
});

//make this component available to the app
export default Header;
