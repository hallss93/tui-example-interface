import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 640,
    tablet: 768,
    laptop: 1024,
    desktop: Infinity,
  },
});
