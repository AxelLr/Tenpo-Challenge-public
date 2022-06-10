import React from 'react';
import {categories, restaurants, favourites} from '@src/utils/mockData';
import {useUser} from '@src/Context/UserContext';
// COMPONENTS
import Box from '@src/components/layout/Box';
import HorizontalList from '@src/components/HorizontalList';
import Button from '@src/components/Button';
import Typography from '@src/components/Typography';
// STYLES
import {ProductsContainer, Products} from './ProductsLanding.styles';
import {useTheme} from 'styled-components';
// ICONS
import AddAddress from '@src/assets/AddAddress.svg';
import LocationIcon from '@src/assets/locationIcon.svg';
// LIST ITEMS
import RestaurantItem from './components/RestaurantItem';
import CategoryItem from './components/CategoryItem';
import FavouriteItem from './components/FavouriteItem';
import LandingHeader from './components/LandingHead';
// NAVIGATION
import {StackNavigationProp} from '@react-navigation/stack';
import {IRootStack, ROUTES} from '@src/types/navigation';

type ProductsLandingNavigationProp = StackNavigationProp<IRootStack>;

type Props = {
  navigation: ProductsLandingNavigationProp;
};

const ProductsLanding: React.FC<Props> = ({navigation}) => {
  const {user} = useUser();

  const {colors} = useTheme();

  const currentAddress = (
    <Box flexDirection="row" height={32} alignItems="center" width="80%">
      <LocationIcon />
      <Box ml={2}>
        <Typography fontSize={12} color={colors.darkGreen}>
          Enviaremos tus pedidos a
        </Typography>
        <Typography
          ellipsizeMode="tail"
          numberOfLines={1}
          fontWeight={300}
          fontSize={17}
          color={colors.green}>
          {user.address}
        </Typography>
      </Box>
    </Box>
  );

  const addAddressButton = (
    <Box p={user.address ? 15 : 19}>
      <Button
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        onPress={() => {
          navigation.navigate(ROUTES.SetAddress);
        }}>
        {user.address ? currentAddress : <AddAddress />}
      </Button>
    </Box>
  );

  return (
    <Box flex={1}>
      <LandingHeader />
      <ProductsContainer flex={1}>
        {addAddressButton}
        <Products>
          <HorizontalList
            data={restaurants}
            title="Restaurantes"
            renderItem={restaurant => (
              <RestaurantItem
                item={restaurant}
                key={restaurant.id}
                darkBackground={restaurant.name === 'YOKONO'}
              />
            )}
          />
          <HorizontalList
            data={categories}
            spacedTitle
            title="Categorías"
            renderItem={category => (
              <CategoryItem item={category} key={category.name} />
            )}
          />
          <HorizontalList
            data={favourites}
            spacedTitle
            title="Tus favoritos"
            renderItem={favourite => (
              <FavouriteItem item={favourite} key={favourite.productName} />
            )}
          />
        </Products>
      </ProductsContainer>
    </Box>
  );
};

export default ProductsLanding;
