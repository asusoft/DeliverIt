import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../../../assets/constants/colors';
import icons from '../../../assets/constants/icons';

const RestaurantItem = ({ restaurant }) => {
  const onPress = () => {
    console.warn('Restaurant Pressed')
  }

  return (
    <Pressable onPress={onPress} style={styles.RestaurantItem}>
      <View style={styles.RestaurantItemImageHolder}>
        <Image
          style={styles.RestaurantImage}
          source={{
            uri: restaurant.image,
          }}
        />
        <FontAwesome style={styles.Like} name="heart" size={30} color="red" />
      </View>
      <View style={styles.ItemInfo}>
        <Text style={styles.ItemName}>{restaurant.name}</Text>
        <Text style={styles.ItemDescription}>Fast Food, Breakfast, Chicken</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.InfoIcon} source={icons.star} />
          <Text style={styles.InfoText}>{restaurant.rating}</Text>
          <Image style={styles.InfoIcon} source={icons.delivery} />
          <Text style={styles.InfoText}>₽{restaurant.deliveryFee}</Text>
          <Image style={styles.InfoIcon} source={icons.time} />
          <Text style={styles.InfoText}>{restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} mins</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;


const styles = StyleSheet.create({
  RestaurantItem: {
    height: 250,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: COLORS.secondary,
  },

  RestaurantItemImageHolder: {
    height: "65%",
    width: "100%",
    borderTopEndRadius: 25
  },

  RestaurantImage: {
    flex: 1,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25
  },

  ItemInfo: {
    margin: 10,
    marginRight: 15,
    justifyContent: "space-between",
  },

  ItemName: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "600"
  },

  ItemDescription: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "400",
    color: COLORS.grey
  },
  Like: {
    position: "absolute",
    padding: 15,
    alignSelf: "flex-end"
  },
  InfoText: {
    fontSize: 14,
    marginLeft: 8,
    marginRight: 35,
    marginTop: 3
  },
  InfoIcon: {
    height: 25,
    width: 25,
    tintColor: COLORS.primary
  }

});
