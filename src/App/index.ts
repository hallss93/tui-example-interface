import TuiHeader from "@/components/Header/index.vue";
import TuiFilter from "@/components/Filter/index.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { TuiHeader, TuiFilter },
})
export default class App extends Vue {}
