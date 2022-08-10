import { Nullable } from "@/interfaces/types";

export interface IProductStore {
  productList: Nullable<IProduct[]>;
  total: number;
}

export interface IProduct {
  name: string;
  email: string;
  ra: string;
  cpf: string;
}

const state: IProductStore = {
  productList: [],
  total: 0,
};

export interface IStateProduct {
  products: IProductStore;
}

export default state;
