/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductStore, IProduct, ISuggestion } from "./state";

export default {
  SET_PRODUCT_LIST(state: IProductStore, payload: IProduct[]): void {
    state.productList = payload;
  },
  SET_PRODUCT_TOTAL(state: IProductStore, payload: number): void {
    state.total = payload;
  },
  SET_PRODUCT_SUGGESTION(state: IProductStore, payload: ISuggestion[]): void {
    state.suggestions = payload;
  },
  SET_SUGGESTION_SELECTED(state: IProductStore, payload: any): void {
    state.suggestion_selected = payload;
  },
};
