import { Component, Vue } from "vue-property-decorator";
import TuiHotelItem from "../HotelItem/index.vue";

@Component({
  components: { TuiHotelItem },
})
export default class TuiHotelList extends Vue {}
