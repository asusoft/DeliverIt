import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import RestaurantInfoScreen from "../screens/RestaurantInfoScreen";
import DishInfoScreen from "../screens/DishInfoScreen";
import CartScreen from "../screens/Cart";
import DrawerView from './DrawerView';
import CustomDrawerContent from './CustomDrawerContent'
import CheckoutScreen from "../screens/CheckoutScreen";
import Payment from "../screens/Payment";
import OrdersScreen from "../screens/OrdersScreen";
import OrderdetailsScreen from "../screens/OrderDetailsScreen";
import CardScreen from "../screens/Cards";
import AddCardScreen from "../screens/AddCard";
import TrackOrderScreen from "../screens/TrackOrderScreen";

import COLORS from '../../assets/constants/colors';
import icons from "../../assets/constants/icons";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ selectedTab, setSelectedTab }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FF0000"
        }}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerType="slide"
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        width: 250,
                        backgroundColor: COLORS.primary
                    },
                    overlayColor: "transparent",
                    drawerLabelStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                        marginStart: -5
                    },
                    drawerActiveTintColor: COLORS.white,
                    drawerInactiveTintColor: COLORS.dark,
                    drawerActiveBackgroundColor: COLORS.transparentBlack,
                    swipeEnabled: true,
                    sceneContainerStyle: {
                        backgroundColor: COLORS.primary,
                    }
                }}
                drawerContent={props => {
                    return <CustomDrawerContent
                        {...props}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />;
                }}
            >
                <Drawer.Screen
                    name="Home"
                    options={{
                        title: 'Home',
                        drawerIcon: ({color}) => (
                          <Image source={icons.home} style={{tintColor: color, ...styles.drawerImage}} />
                        ),
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <HomeScreen {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Restaurant"
                    options={{
                        drawerItemStyle: { display: 'none' }
                      }}
                      >
                    {props => (
                        <DrawerView styler={styles.container}>
                            <RestaurantStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Cart"
                    options={{
                        title: 'My Cart',
                        drawerIcon: ({color}) => (
                          <Image source={icons.cart} style={{tintColor: color, ...styles.drawerImage}} />
                        ),
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <CartScreen {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="CheckoutScreen"
                    options={{
                        drawerItemStyle: { display: 'none' }
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <CheckoutScreen {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>

                <Drawer.Screen
                    name="Payment"
                    options={{
                        drawerItemStyle: { display: 'none' }
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <Payment {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Orders"
                    options={{
                        title: 'My Orders',
                        drawerIcon: ({color}) => (
                          <Image source={icons.list} style={{tintColor: color, ...styles.drawerImage}} />
                        ),
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <OrdersStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Profile"
                    options={{
                        title: 'My Cards',
                        drawerIcon: ({color}) => (
                          <Image source={icons.cards} style={{tintColor: color, ...styles.drawerImage}} />
                        ),
                      }}>
                    {props => (
                        <DrawerView styler={styles.container}>
                            <ProfileStackNavigator {...props} />
                        </DrawerView>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

const RestaurantStack = createNativeStackNavigator();

const RestaurantStackNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="RestaurantInfoScreen"
        >
            <RestaurantStack.Screen
                name="RestaurantInfoScreen"
                component={RestaurantInfoScreen}
            />
            <RestaurantStack.Screen
                name="DishInfoScreen"
                component={DishInfoScreen}
            />
        </RestaurantStack.Navigator>
    );
};

const CartStack = createNativeStackNavigator();

const CartStackNavigator = () => {
    return (
        <CartStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="CartScreen"
        >
            <CartStack.Screen
                name="CartScreen"
                component={CartScreen}
            />
            <CartStack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
            />
            <CartStack.Screen
                name="Payment"
                component={Payment}
            />
        </CartStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();
const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName= "OrdersScreen"
        >
            <OrdersStack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
            />
            <OrdersStack.Screen
                name="OrderDetailsScreen"
                component={OrderdetailsScreen}
            />
            <OrdersStack.Screen
                name="TrackOrderScreen"
                component={TrackOrderScreen}
            />
        </OrdersStack.Navigator>
    );
};

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName= "CardScreen"
        >
            <ProfileStack.Screen
                name="CardScreen"
                component={CardScreen}
            />
            <ProfileStack.Screen
                name="AddCardScreen"
                component={AddCardScreen}
            />
        </ProfileStack.Navigator>
    );
};

export default DrawerNavigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    drawerImage: {
        width: 25,
        height: 25,
      },
}); 