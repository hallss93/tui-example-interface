import ResponseAPI from "@/interfaces/Response";
import { IStateProduct, ISuggestion } from "@/store/product/state";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

@Component({})
export default class TuiSearch extends Vue {
  @Prop({ default: "form-max" }) classParam!: string;
  /* Actions */
  @Action("products/GET_SUGGESTIONS")
  getSuggestions!: ({
    keyword,
  }: {
    keyword: string;
  }) => ResponseAPI<ISuggestion[]>;

  @Action("products/SET_SUGGESTION_SELECTED")
  setSuggestionSelected!: ({
    city,
    region,
    ref,
    label,
  }: {
    city?: number;
    region?: number;
    ref?: number;
    label: string;
  }) => ResponseAPI<ISuggestion[]>;

  /* States */

  @State((state: IStateProduct) => state.products.suggestions)
  suggestions!: ISuggestion[];

  showSuggestion = false;
  keyword = "";
  suggestionSelected = "";

  searchSuggestion(): void {
    this.showSuggestion = true;
    this.getSuggestions({ keyword: this.keyword });
  }

  selected(label: string, lebalex: string, value: string): void {
    this.showSuggestion = false;
    this.suggestionSelected = value;
    this.$emit('hidden')

    const key = label === "hotel" ? "ref" : label;
    this.setSuggestionSelected({ [key]: value, label: lebalex });
  }

  created() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.querySelector("#app") as any).onclick = function () {
      that.showSuggestion = false;
    };
  }
}
