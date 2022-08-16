/* eslint-disable @typescript-eslint/no-explicit-any */
import { Func2 } from "@/interfaces/types";
import productService from "../../service/models/product";
import { IProduct, IProductStore, ISuggestion } from "./state";
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
      adults = 1,
      duration = 1,
      $sort = "starrating_desc",
      $limit = 15,
      $skip = 0,
      $total = 100000,
      reset = true,
      city,
      region,
      ref,
    }: {
      adults: number;
      duration: number;
      $sort: string;
      $limit: number;
      $skip: number;
      $total: number;
      reset?: boolean;
      city?: number;
      region?: number;
      ref?: string;
    }
  ): Promise<void> {
    if (state.suggestion_selected.value) {
      if (state.suggestion_selected.value.city) {
        city = state.suggestion_selected.value.city;
      }
      if (state.suggestion_selected.value.region) {
        region = state.suggestion_selected.value.region;
      }
      if (state.suggestion_selected.value.ref) {
        ref = state.suggestion_selected.value.ref;
      }
    }

    return productService
      .getStudents({
        adults,
        duration,
        $sort,
        $limit,
        $skip,
        $total,
        city,
        region,
        ref,
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
  async GET_SUGGESTIONS(
    {
      commit,
    }: {
      commit: Func2<
        string,
        boolean | IProduct[] | ISuggestion[] | number | string,
        void
      >;
    },
    {
      keyword,
    }: {
      keyword: string;
    }
  ): Promise<void> {
    return productService
      .getSuggestions({ keyword })
      .then((res) => {
        commit("SET_PRODUCT_SUGGESTION", res.data.data);
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
  async SET_SUGGESTION_SELECTED(
    {
      commit,
      dispatch,
    }: {
      dispatch: Func2<string, any, void>;
      commit: Func2<string, any, void>;
    },
    {
      city,
      region,
      ref,
      label,
    }: {
      city?: number;
      region?: number;
      ref?: number;
      label: string;
    }
  ): Promise<void> {
    let value = {};
    if (city) value = { city };
    if (region) value = { region };
    if (ref) value = { ref };

    commit("SET_SUGGESTION_SELECTED", { value, label });
    dispatch("GET_PRODUCTS", {
      adults: 1,
      duration: 1,
      $limit: 15,
      $skip: 0,
    });
  },
};
