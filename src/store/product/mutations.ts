import { IProductStore, IProduct } from "./state";

export default {
  SET_PRODUCT_LIST(state: IProductStore, payload: IProduct[]): void {
    state.productList = payload;
  },
  SET_PRODUCT_TOTAL(state: IProductStore, payload: number): void {
    state.total = payload;
  },
};
