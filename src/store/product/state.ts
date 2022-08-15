/* eslint-disable @typescript-eslint/no-explicit-any */
import { Nullable } from "@/interfaces/types";

export interface IProductStore {
  productList: Nullable<IProduct[]>;
  total: number;
  suggestions: ISuggestion[];
  suggestion_selected: any;
}

export interface ISuggestion {
  category: string;
  items: ISuggestionItems[];
  label: string;
}
interface ISuggestionItems {
  label: string;
  value: string;
}

export interface IProduct {
  allInPrice: Price;
  taxAmount: Price;
  totalPrice: Price;
  displayPrice: DisplayPrice;
  netPrice: Price;
  localSupplier: string;
  marketIdentifier: string;
  board: string;
  from: string;
  city: City;
  ref: string;
  duration: string;
  region: Region;
  country: Country;
  adults: number;
  room: string;
  geo: Geo;
  children: string;
  averageRating: string;
  ratingCount: string;
  starRating: string;
  amenities: string;
  guests: number;
  trustyouId: string;
  hotelName: string;
  perPerson: PerPerson;
}

export interface Price {
  currency: string;
  amount: number;
}

export interface DisplayPrice {
  currency: string;
  amount: number;
  priceType: string;
}

export interface City {
  code: string;
  label: string;
}

export interface Region {
  code: string;
  label: string;
}

export interface Country {
  code: string;
  label: string;
}

export interface Geo {
  latitude: string;
  longitude: string;
}

export interface PerPerson {
  allInPrice: Price;
  totalPrice: Price;
  displayPrice: Price;
  netPrice: Price;
}

const state: IProductStore = {
  productList: [],
  total: 0,
  suggestions: [],
  suggestion_selected: {
    label: "Hoteis",
  },
};

export interface IStateProduct {
  products: IProductStore;
}

export default state;
