import { Component, Vue } from "vue-property-decorator";
import TuiSearch from "../Search/index.vue";

@Component({ components: { TuiSearch } })
export default class TuiHeader extends Vue {
  openMenuMobile = false;

  openFilter(): void {
    this.$emit("open-filter");
    this.openMenuMobile = false;
  }
}
