/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct, IStateProduct } from "@/store/product/state";
import { Component, Vue } from "vue-property-decorator";
import TuiHotelItem from "../HotelItem/index.vue";
import { State, Action } from "vuex-class";
import ResponseAPI, { IPaginationProducts } from "@/interfaces/Response";
@Component({
  components: { TuiHotelItem },
})
export default class TuiHotelList extends Vue {
  /* Actions */
  @Action("products/GET_PRODUCTS")
  getProducts!: ({
    adults,
    duration,
    $sort,
    $limit,
    $skip,
    $total,
    reset,
  }: {
    adults?: number;
    duration?: number;
    $sort?: string;
    $limit?: number;
    $skip?: number;
    $total?: number;
    reset?: boolean;
  }) => ResponseAPI<IPaginationProducts<IProduct[]>>;

  /* States */

  @State((state: IStateProduct) => state.products.suggestion_selected)
  suggestion_selected!: any;

  @State((state: IStateProduct) => state.products.productList)
  productList!: IProduct[];
  @State((state: IStateProduct) => state.products.total) productTotal!: string;

  /* Variables */
  skip = 0;

  /* Lifecycle */
  created(): void {
    this.getProducts({
      adults: 2,
      duration: 1,
      $limit: 10,
      $skip: this.skip,
    });
  }

  /* Functions */

  moreItens(): void {
    this.skip++;
    this.getProducts({
      adults: 2,
      duration: 1,
      $limit: 10,
      $skip: this.skip,
      reset: false,
    });
  }
}
