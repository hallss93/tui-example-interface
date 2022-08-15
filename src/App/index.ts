import TuiHeader from "@/components/Header/index.vue";
import TuiFilter from "@/components/Filter/index.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { TuiHeader, TuiFilter },
})
export default class App extends Vue {
  display = 3;

  onResize() {
    if (window.innerWidth > 960) {
      this.display = 5;
    } else {
      this.display = 3;
    }
  }
  created() {
    window.addEventListener("resize", this.onResize);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
}
