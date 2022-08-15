import { IStateProduct, ISuggestion } from "@/store/product/state";
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class TuiFilter extends Vue {
  /* States */

  @State((state: IStateProduct) => state.products.suggestions)
  suggestions!: ISuggestion[];
}
