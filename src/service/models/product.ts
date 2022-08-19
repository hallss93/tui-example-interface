/* eslint-disable @typescript-eslint/no-explicit-any*/
import ResponseAPI from "@/interfaces/Response";
import { IProduct, ISuggestion } from "@/store/product/state";
import api from "./../index";
import params from "./../params";
import URL from "./../URLs";
export default {
  getStudents: async ({
    adults = 2,
    duration = 1,
    $sort = "starrating_desc",
    $limit = 15,
    $skip = 0,
    $total = 100000,
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
    city?: number;
    region?: number;
    ref?: string;
  }): Promise<ResponseAPI<IProduct[]>> => {
    return await api.get(
      `${URL.PRODUCT_SEARCH}/${params.toParamns([
        {
          adults,
          duration,
          $sort,
          $limit,
          $skip,
          $total,
          $market: "tui-pt",
          city,
          region,
          ref,
        },
      ])}`
    );
  },
  getSuggestions: async ({
    keyword,
  }: {
    keyword: string;
  }): Promise<ResponseAPI<ISuggestion[]>> => {
    return await api.get(
      `${URL.PRODUCT_SUGGESTION}/${params.toParamns([
        {
          keyword,
          $market: "tui-pt",
        },
      ])}`
    );
  },
};
