/* eslint-disable @typescript-eslint/no-explicit-any*/
import ResponseAPI from "@/interfaces/Response";
import { IProduct } from "@/store/product/state";
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
    $market = "tui-br",
  }: {
    adults: number;
    duration: number;
    $sort: string;
    $limit: number;
    $skip: number;
    $total: number;
    $market: string;
  }): Promise<ResponseAPI<IProduct[]>> => {
    return await api.get(
      `${URL.PRODUCT_SEARCH}/${params.toParamns([
        { adults, duration, $sort, $limit, $skip, $total, $market },
      ])}`
    );
  },
};
