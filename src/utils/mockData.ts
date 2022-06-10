import {
  MC_DONALDS,
  YOKONO,
  PAPA_JOHNS,
  MELT,
  BURGUERS,
  ITALIAN,
  PIZZAS,
  BIG_MAC,
  PIZZA,
  MC_DONALDS_MINI,
  MELT_MINI,
} from '@src/assets';
import {ImageSourcePropType} from 'react-native';

export interface IRestaurant {
  id: number;
  name: string;
  rating: number;
  delay: string;
  logo: ImageSourcePropType;
  disscount: number;
}

export interface ICategory {
  name: string;
  backgroundImage: ImageSourcePropType;
}

export interface IFavourite {
  productName: string;
  rating: number;
  company: string;
  delay: string;
  productImage: ImageSourcePropType;
  companyImage: ImageSourcePropType;
}

export const restaurants: IRestaurant[] = [
  {
    id: 1,
    name: 'Mcdonalds',
    rating: 3.5,
    delay: '10-50 min.',
    logo: MC_DONALDS,
    disscount: 50,
  },
  {
    id: 2,
    name: 'MELT pizzas',
    rating: 4.5,
    delay: '10-50 min.',
    logo: MELT,
    disscount: 30,
  },
  {
    id: 3,
    name: 'YOKONO',
    rating: 3.5,
    delay: '10-50 min.',
    logo: YOKONO,
    disscount: 20,
  },
  {
    id: 4,
    name: 'Papa Johns',
    rating: 4.5,
    delay: '10-50 min.',
    logo: PAPA_JOHNS,
    disscount: 40,
  },
];

export const categories: ICategory[] = [
  {
    name: 'hamburguesas',
    backgroundImage: BURGUERS,
  },
  {
    name: 'italiana',
    backgroundImage: ITALIAN,
  },
  {
    name: 'pizzas',
    backgroundImage: PIZZAS,
  },
];

export const favourites: IFavourite[] = [
  {
    productName: 'Combo hamburgesa Bigmac',
    rating: 3.5,
    company: 'Mcdonalds',
    delay: '10-50 min.',
    productImage: BIG_MAC,
    companyImage: MC_DONALDS_MINI,
  },
  {
    productName: 'Pizza Mediana 3 ingredientes',
    rating: 3.5,
    company: 'MELT pizzas',
    delay: '10-50 min.',
    productImage: PIZZA,
    companyImage: MELT_MINI,
  },
];
