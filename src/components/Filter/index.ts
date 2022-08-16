import { IStateProduct, ISuggestion } from "@/store/product/state";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class TuiFilter extends Vue {
  @Prop({ type: String }) height!: string;
  @Prop({ type: Boolean }) noPadding!: boolean;

  /* States */

  @State((state: IStateProduct) => state.products.suggestions)
  suggestions!: ISuggestion[];
}
