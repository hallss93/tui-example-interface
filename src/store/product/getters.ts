import { Nullable } from "@/interfaces/types";
import { IProductStore, IProduct } from "./state";

export default {
  PRODUCT_LIST: (state: IProductStore): Nullable<IProduct[]> => {
    return state.productList;
  },
  PRODUCT_TOTAL: (state: IProductStore): Nullable<number> => {
    return state.total;
  },
};
