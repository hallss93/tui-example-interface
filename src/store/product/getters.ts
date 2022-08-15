import { Nullable } from "@/interfaces/types";
import { IProductStore, IProduct, ISuggestion } from "./state";

export default {
  PRODUCT_LIST: (state: IProductStore): Nullable<IProduct[]> => {
    return state.productList;
  },
  PRODUCT_TOTAL: (state: IProductStore): Nullable<number> => {
    return state.total;
  },
  PRODUCT_SUGGESTIONS: (state: IProductStore): Nullable<ISuggestion[]> => {
    return state.suggestions;
  },
  PRODUCT_SUGGESTION_SELECTED: (
    state: IProductStore
  ): Nullable<ISuggestion[]> => {
    return state.suggestion_selected;
  },
};
