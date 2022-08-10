import { Func2 } from "@/interfaces/types";
import productService from "../../service/models/product";
import { IProduct, IProductStore } from "./state";
export default {
  async GET_PRODUCTS(
    {
      commit,
      state,
    }: {
      commit: Func2<string, boolean | IProduct[] | number | string, void>;
      state: IProductStore;
    },
    {
      adults = 2,
      duration = 1,
      $sort = "starrating_desc",
      $limit = 15,
      $skip = 0,
      $total = 100000,
      $market = "tui-br",
      reset = true,
    }: {
      adults: number;
      duration: number;
      $sort: string;
      $limit: number;
      $skip: number;
      $total: number;
      $market: string;
      reset?: boolean;
    }
  ): Promise<void> {
    return productService
      .getStudents({
        adults,
        duration,
        $sort,
        $limit,
        $skip,
        $total,
        $market,
      })
      .then((res) => {
        if (reset) {
          commit("SET_PRODUCT_LIST", res.data.data);
        } else {
          let data = res.data.data;
          const productList = state.productList as IProduct[];
          data = data.concat(productList);

          commit("SET_PRODUCT_LIST", data);
        }
        commit("SET_PRODUCT_TOTAL", res.data.total);
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
};
