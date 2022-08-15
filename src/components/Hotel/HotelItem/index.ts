import { Component, Prop, Vue } from "vue-property-decorator";
import { IProduct } from "@/store/product/state";

@Component({})
export default class TuiHotelItem extends Vue {
  @Prop({ required: true }) product!: IProduct;

  public formatNumber(currency: string, value: number): string {
    if (!value) value = 0;
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency,
    }).format(value);
  }
}
